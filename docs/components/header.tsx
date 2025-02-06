"use client";

import { Container, useTheme } from "@brifui/components";

import { Logo } from "./logo";

export const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header className="flex items-center justify-center w-full border-b border-border h-12 shadow-xs">
      <Container center onClick={() => setTheme("violet")}>
        <Logo />
      </Container>
    </header>
  );
};
