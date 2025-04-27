import type { NextConfig } from "next";
import withRspack from "next-rspack";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export"
};

export default withRspack(nextConfig);
