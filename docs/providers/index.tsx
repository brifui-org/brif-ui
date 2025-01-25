"use client";

export function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      {children}
    </html>
  );
}
