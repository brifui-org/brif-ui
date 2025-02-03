import fg from "fast-glob";

export const findTailwindConfig = async () => {
  const entries = await fg(["tailwind.config.(ts|js|cjs|mjs)"]);

  return entries[0]!;
};
