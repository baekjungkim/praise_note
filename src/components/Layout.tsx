import { Header } from "@/components/Header";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-[calc(100vh-4rem)]">{children}</main>
    </div>
  );
};
