"use client";

import { Container, useTheme } from "@brifui/components";

export default function Home() {
  const { currentTheme } = useTheme();

  return <Container center>Hello world - Theme is {currentTheme}</Container>;
}
