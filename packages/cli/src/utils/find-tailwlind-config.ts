import path from 'node:path'
import fs from 'node:fs'

export type FindTailwindConfigArgs = {
  /**
   * Directory contains the tailwind
   * @default "./"
   */
  rootDir?: string;
  /**
   * Tailwind config file name.
   * @default "tailwind.config.ts"
   */
  fileName?: string
};

export const findTailwindConfig = ({
  rootDir = "./",
  fileName = "tailwind.config.ts",
}: FindTailwindConfigArgs = {}) => {
    const filePath = path.resolve(rootDir, fileName)
    if (!fs.existsSync(filePath)) {
        throw new Error(`Cannot locate the ${filePath} file.`)
    }
    return filePath
};
