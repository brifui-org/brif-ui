import Link from "next/link";
import { Box } from "@brifui/components";

export const Logo = () => {
  return (
    <Box className="">
      <Link className="w-fit inline-block" href="/">
        <h1 className="font-display font-semibold text-3xl w-fit">Brif</h1>
      </Link>
    </Box>
  );
};
