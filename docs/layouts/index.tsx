import React from "react";
import { Header } from "@/components";
import { Sidebar } from "@/components/sidebar";
import { Container } from "@brifui/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 py-10">
        <Container className="grid grid-cols-[250px_1fr] gap-2" center>
          <Sidebar />
          <Container as="main" center className="px-10">
            {children}
          </Container>
        </Container>
      </div>
    </div>
  );
};
