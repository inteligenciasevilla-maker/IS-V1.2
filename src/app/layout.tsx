import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "INTELIGENCIA SEVILLA | Consultora Experta en IA",
  description: "Auditamos tu empresa para detectar donde la tecnología, la inteligencia artificial y la automatización pueden ayudarte a mejorar y crecer de forma real.",
  keywords: ["IA", "Inteligencia Artificial", "Sevilla", "Consultoría IA", "Automatización", "Desarrollo Software", "Marketing Digital", "Formación IA"],
  authors: [{ name: "Inteligencia Sevilla" }],
  openGraph: {
    title: "INTELIGENCIA SEVILLA | Consultora Experta en IA",
    description: "Tecnología con visión de negocio que ayuda a tu empresa a crecer.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-rose-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

