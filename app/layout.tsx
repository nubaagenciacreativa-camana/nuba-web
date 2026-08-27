import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUBA | Agencia Creativa",
  description: "Agencia creativa en Camaná, Arequipa. Contenido, redes sociales, fotografía, video y diseño para negocios.",
  metadataBase: new URL("https://nuba-web.vercel.app"),
  openGraph: {
    title: "NUBA | Agencia Creativa",
    description: "Creamos contenido para hacer crecer tu negocio desde Camaná, Arequipa.",
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
