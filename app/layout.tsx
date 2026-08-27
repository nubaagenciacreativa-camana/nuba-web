import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUBA | Agencia Creativa",
  description: "Ideas que conectan. Estrategias que impulsan. Agencia creativa de contenido, identidad y marketing digital.",
  metadataBase: new URL("https://nuba-web.vercel.app"),
  openGraph: {
    title: "NUBA | Agencia Creativa",
    description: "Creamos marcas con intención, contenido que conecta y estrategias que impulsan.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
