import { Container } from "@brifui/components";

export default function Home() {
  return (
    <Container
      style={(theme) => ({
        width: theme.breakpoints.mobile
      })}
      center
    >
      HEHE
    </Container>
  );
}
