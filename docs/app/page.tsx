"use client";

import { Container, useTheme } from "@brifui/components";

export default function Home() {
  const { currentTheme } = useTheme();

  return (
    <Container
      style={(theme) => ({
        width: theme.breakpoints.mobile
      })}
      center
    >
      Hello world - Theme is {currentTheme}
    </Container>
  );
}
