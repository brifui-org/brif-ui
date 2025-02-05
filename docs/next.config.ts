import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

const withMDX = createMDX({
  options: {
    // @ts-expect-error ggf
    remarkPlugins: [["remark-rehype", { strict: true, throwOnError: true }]],
    rehypePlugins: [
      // @ts-expect-error ggf
      ["rehype-slug", { strict: true, throwOnError: true }]
    ]
  }
});

export default withMDX(nextConfig);
