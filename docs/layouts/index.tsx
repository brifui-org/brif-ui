import React from "react";
import { Logo } from "@/components";
import { Container } from "@brifui/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[300px_1fr] min-h-screen">
      <aside className="relative w-full border-r-2 border-border overflow-auto max-h-screen">
        <div className="sticky top-0 left-0">
          <Logo />
        </div>
        <div className="min-h-[200vh]" />
      </aside>
      <Container as="main" className="px-16 py-8" center>
        {children}
      </Container>
    </div>
  );
};
