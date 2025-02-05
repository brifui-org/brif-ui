"use client";

import { Container } from "@brifui/components";

import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="flex items-center justify-center w-full border-b border-border h-12 shadow-xs">
      <Container center>
        <Logo />
      </Container>
    </header>
  );
};
