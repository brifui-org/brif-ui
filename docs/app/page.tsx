import { Container } from "@brifui/components";

import { theme } from "../.brifui/theme";

export default function Home() {
  console.log(theme);
  return (
    <Container
      style={(theme) => ({
        backdropFilter: theme.breakpoints.mobile
      })}
      center
    >
      {JSON.stringify(theme)}
    </Container>
  );
}
