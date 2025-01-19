import Link from "next/link";
import { Box } from "@brifui/components";

export const Logo = () => {
  return (
    <Box className="py-8 px-16 border-b-2 border-border">
      <Link className="w-fit inline-block" href="/">
        <h1 className="font-display font-semibold text-4xl w-fit">Brif</h1>
      </Link>
    </Box>
  );
};
