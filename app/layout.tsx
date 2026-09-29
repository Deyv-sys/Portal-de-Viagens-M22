import type { Metadata } from "next";
import type { ReactNode } from "react";
import Layout from "@/components/Layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rota Livre | Viagens pelo Brasil",
  description: "Inspire-se e planeje sua próxima viagem por destinos brasileiros.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
