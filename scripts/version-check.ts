import chalk from "chalk";
import semver from "semver";
import fs from "node:fs";
import path from "node:path";

// Define the path to the packages directory
const packagesDir = path.resolve(__dirname, "../packages");

// Function to get package version from package.json
function getPackageVersion(
  packageJsonPath: string
): { name: string; version: string } | null {
  try {
    // Read and parse package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    // Only return if it has both name and version AND is a @brifui package
    if (
      packageJson.name &&
      packageJson.version &&
      packageJson.name.startsWith("@brifui")
    ) {
      return {
        name: packageJson.name,
        version: packageJson.version
      };
    }
    return null;
  } catch (error) {
    console.error(`Error reading package info from ${packageJsonPath}:`, error);
    return null;
  }
}

// Function to recursively find all package.json files
function findPackageJsonFiles(
  dir: string,
  packageInfos: Array<{ name: string; version: string }> = []
): Array<{ name: string; version: string }> {
  if (!fs.existsSync(dir)) {
    return packageInfos;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name !== "node_modules") {
      // Recursively search in subdirectories
      findPackageJsonFiles(entryPath, packageInfos);
    } else if (entry.name === "package.json") {
      // Found a package.json file
      const packageInfo = getPackageVersion(entryPath);
      if (packageInfo) {
        packageInfos.push(packageInfo);
      }
    }
  }

  return packageInfos;
}

// Function to check and update dependencies in a package.json file
function updateDependencies(
  packageJsonPath: string,
  latestVersions: Map<string, string>
): boolean {
  try {
    // Read and parse package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    let hasUpdates = false;

    // Helper function to update dependencies in a specific section
    const updateDependencySection = (section: string) => {
      if (!packageJson[section]) return;

      Object.entries(packageJson[section]).forEach(([dep, version]) => {
        const depName = dep as string;
        const depVersion = version as string;

        // Only process @brifui packages
        if (depName.startsWith("@brifui") && latestVersions.has(depName)) {
          const latestVersion = latestVersions.get(depName)!;
          const currentVersion = depVersion.replace(/[\^~]/, ""); // Remove ^ or ~ prefix

          if (currentVersion !== latestVersion) {
            // Keep the same version specifier (^ or ~)
            const specifier = depVersion.startsWith("^")
              ? "^"
              : depVersion.startsWith("~")
                ? "~"
                : "";

            packageJson[section][depName] = `${specifier}${latestVersion}`;
            hasUpdates = true;

            console.log(
              `  ${chalk.blue("→")} Updated ${chalk.cyan(depName)} in ${chalk.magenta(section)}: ${chalk.red(depVersion)} → ${chalk.green(`${specifier}${latestVersion}`)}`
            );
          }
        }
      });
    };

    // Update in different dependency sections
    updateDependencySection("dependencies");
    updateDependencySection("peerDependencies");
    updateDependencySection("devDependencies");

    // If there were updates, write the file back
    if (hasUpdates) {
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2) + "\n"
      );
    }

    return hasUpdates;
  } catch (error) {
    console.error(`Error updating dependencies in ${packageJsonPath}:`, error);
    return false;
  }
}

// Function to check versions of all packages
function checkPackageVersions(): void {
  console.log(chalk.cyan.bold("Checking @brifui package versions...\n"));

  // Check if the packages directory exists
  if (!fs.existsSync(packagesDir)) {
    console.error(
      chalk.red.bold(`Packages directory not found at: ${packagesDir}`)
    );
    process.exit(1);
  }

  // Recursively find all package.json files and collect package info
  const packagesEntries = findPackageJsonFiles(packagesDir);

  // Remove duplicates by keeping the latest version of each package
  const latestVersions = new Map<string, string>();

  for (const pkg of packagesEntries) {
    if (
      !latestVersions.has(pkg.name) ||
      semver.gt(pkg.version, latestVersions.get(pkg.name)!)
    ) {
      latestVersions.set(pkg.name, pkg.version);
    }
  }

  // Convert map back to array for output
  const packages = Array.from(latestVersions.entries()).map(
    ([name, version]) => ({
      name,
      version
    })
  );

  // Sort packages by name for consistent output
  packages.sort((a, b) => a.name.localeCompare(b.name));

  // Print package info
  if (packages.length > 0) {
    console.log(chalk.cyan.bold("@brifui package versions (latest):"));
    packages.forEach((pkg) => {
      console.log(
        `- ${chalk.green(pkg.name)}: ${chalk.yellow.bold(pkg.version)}`
      );
    });
    console.log(
      `\n${chalk.magenta.bold("Total @brifui packages found:")} ${chalk.white.bgMagenta(` ${packages.length} `)}`
    );

    // Now check and update dependencies
    console.log(
      chalk.cyan.bold("\nChecking for dependency version mismatches...")
    );

    // Find all package.json files again to process their dependencies
    const packageJsonPaths: string[] = [];
    (function findAllPackageJsonFiles(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const entryPath = path.join(dir, entry.name);

        if (entry.isDirectory() && entry.name !== "node_modules") {
          findAllPackageJsonFiles(entryPath);
        } else if (entry.name === "package.json") {
          packageJsonPaths.push(entryPath);
        }
      }
    })(packagesDir);

    // Process each package.json file
    let totalUpdates = 0;
    let packagesUpdated = 0;

    packageJsonPaths.forEach((packageJsonPath) => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

      // Only process @brifui packages
      if (packageJson.name && packageJson.name.startsWith("@brifui")) {
        console.log(
          `\n${chalk.yellow.bold(packageJson.name)} ${chalk.dim(`(${packageJson.version})`)}`
        );

        const updated = updateDependencies(packageJsonPath, latestVersions);
        if (updated) {
          totalUpdates++;
          packagesUpdated++;
        } else {
          console.log(
            "  " +
              chalk.green("✓") +
              " All dependencies are using the latest versions"
          );
        }
      }
    });

    // Summary of updates
    if (totalUpdates > 0) {
      console.log(
        `\n${chalk.blue.bold("Summary:")} Updated dependencies in ${chalk.white.bgBlue(` ${packagesUpdated} `)} packages`
      );
    } else {
      console.log(`\n${chalk.green.bold("All dependencies are up to date!")}`);
    }
  } else {
    console.log(chalk.yellow("No @brifui packages found."));
  }
}

// Execute the function
checkPackageVersions();
