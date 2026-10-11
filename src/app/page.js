"use client";

import { useState } from "react";
import styles from "./page.module.css";

const unreadNews = [
  {
    id: 1,
    title: "Sabiha Gökçen'de dudak uçuklatan fiyat: Sadece 1 şişe su...",
    img: "/images/sabiha-gokcen-water.jpg",
  },
  {
    id: 2,
    title: "İşten çıkarıldı; belediyeyi silah ve kılıçla bastı",
    img: "/images/belediye-baskini.jpg",
  },
  {
    id: 3,
    title: "Uyanıklık yapmaya çalıştı, 240 bin TL ceza yedi",
    img: "/images/drone-police.jpg",
  },
  {
    id: 4,
    title: "Ne Türk, Ne İtalyan, ne Fransiz: Dünyanın en yakışıklı erkekleri belli oldu",
    img: "/images/yakisikli-erkekler.jpg",
  },
  {
    id: 5,
    title: "6 ilde rüşvet operasyonu: Damal Belediye Başkanı dahil 10 kişi gözaltına alındı",
    img: "/images/belediye-baskani.jpg",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCtaClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://cryptosvet.cz";
    }, 5000);
  };
  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header (NTV / Turk Portal Style) */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Left Menu / Hamburger Icon */}
          <button className={styles.headerBtn} aria-label="Menü">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Centered Logo */}
          <a href="#" className={styles.logoLink} aria-label="Turk Portal">
            <img
              src="/images/turk-portal-horizontal.png"
              alt="Turk Portal"
              className={styles.logoImg}
            />
          </a>

          {/* Right Search Icon */}
          <button className={styles.headerBtn} aria-label="Ara">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7.5"></circle>
              <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* 2. Article Main */}
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          {/* Headline */}
          <h1 className={styles.articleTitle}>
            SON DAKİKA: Maliye, 200.000 TL üzeri kripto varlıklara %3 “dijital güvenlik vergisi” getirmeye hazırlanıyor
          </h1>

          {/* Date Meta */}
          <div className={styles.articleMeta}>
            <div className={styles.metaDatetime}>
              10.10.2026 - 10:02 | Son Güncellenme: 10.10.2026 - 10:02
            </div>
          </div>

          {/* Main Image */}
          <div className={styles.articleImageWrap}>
            <img
              src="/images/crypto-tax.jpg"
              alt="Kryptoměny v ČR"
              className={styles.articleImage}
            />
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            <p className={styles.articleLead}>
              Gelir İdaresi Başkanlığı (GİB) kaynaklarına göre, kripto varlıkların vergilendirilmesine yönelik bir çalışma kapsamında, gerçek kişilerin 200.000 TL’yi aşan kripto varlıklarına %3 oranında “dijital güvenlik vergisi” getirilmesi planlanıyor. Söz konusu verginin, Türkiye’de faaliyet gösteren kripto para borsaları tarafından doğrudan kesilebileceği ve kullanıcıların ayrıca beyanda bulunmak zorunda kalmayabileceği belirtiliyor.
            </p>

            <h2 className={styles.sectionHeading}>
              İddiaların ardından borsalarda hareketlilik: fiat para çekme işlemleri durduruldu, bankalardan açıklama bekleniyor
            </h2>

            <p className={styles.articleP}>
              BtcTurk, geçici bir önlem olarak tüm fiat para çekme işlemlerini durdurduğunu açıkladı. Platform, gerekçe olarak vergi dairesinden kesintinin nasıl uygulanacağına dair nihai onay beklediklerini gösterdi.
            </p>

            <p className={styles.articleP}>
              Paribu’dan yapılan açıklamada ise bazı işlem çiftlerinin geçici olarak kapatıldığı belirtildi. Müşteri destek sayfasında “200’den fazla kişinin sırada olduğu” bilgisi yer aldı.
            </p>

            <div className={styles.quoteBox}>
              <p className={styles.quoteIntro}>
                İstanbul’da yaşayan bir kripto para yatırımcısı şunları anlattı:
              </p>
              <p className={styles.quoteText}>
                “Cüzdanımda yaklaşık 850.000 TL değerinde 0,15 BTC bulunuyor. BtcTurk, para çekme işlemlerimi doğrudan engelledi ve vergi kesintisi sürecinin tamamlanmasını beklemem gerektiğini söyledi. Müşteri hizmetleriyle iletişime geçtiğimde, kendilerinin de henüz herhangi bir resmî belge almadıklarını ve para çekme işlemlerini yalnızca önlem amacıyla geçici olarak durdurduklarını söylediler.”
              </p>
            </div>

            <h2 className={styles.sectionHeading}>
              Banka bildirimlerinde doğrudan “vergi” ifadesi geçmiyor, ancak ifadeler dikkat çekici
            </h2>

            <p className={styles.articleP}>
              Garanti BBVA ve Türkiye İş Bankası, mobil uygulama üzerinden müşterilerine bildirim gönderdiler. Bildirimlerde doğrudan “vergi” kelimesi geçmiyor; yalnızca “mevzuata uyum” ve “işlem güvenliği” vurgulanıyor. Ancak bildirimlerde, vergi sistemiyle entegrasyonu tamamlanmamış hesaplarda fiat para işlemlerine ilişkin bazı özelliklerin kısıtlanabileceği de belirtiliyor.
            </p>

            <p className={styles.articleP}>
              VakıfBank ve Akbank müşteri hizmetleri de yoğun telefon trafiğiyle karşılaştı. Birçok müşteri, bu gelişmelerin para transferlerini etkileyip etkilemeyeceğini öğrenmek istedi.
            </p>

            <div className={styles.clarificationBox}>
              <div className={styles.clarificationHeader}>
                —— Ek açıklama ——
              </div>
              <p className={styles.articleP}>
                Saat 17.10’da durum değişti. GİB sözcüsü, söz konusu belgenin yalnızca sistem stres testleri için hazırlanan kurum içi bir belge olduğunu ve insan hatası nedeniyle yanlışlıkla kamuya açık bir sunucuya yüklendiğini belirtti. Türkiye şu anda böyle bir vergi uygulamıyor.
              </p>
              <p className={styles.articleP} style={{ marginBottom: 0 }}>
                BtcTurk ve Paribu daha sonra aynı gece kısıtlamaları kaldırdılar ve kullanıcıların varlıklarıyla ilgili herhangi bir sorun olmadığını duyurdular.
              </p>
            </div>

            <h2 className={styles.sectionHeading}>
              Ancak kafalardaki soru işaretleri hâlâ silinmiş değil
            </h2>

            <p className={styles.articleP}>
              Yetkililer bunun bir “hatalı paylaşım” olduğunu söylüyor, ancak birkaç soru hâlâ yanıtsız:
            </p>

            <ul className={styles.bulletList}>
              <li>Neden bir stres testi belgesinde somut vergi oranı ve eşiği yazıyor?</li>
              <li>Neden tam da kripto vergisi tartışmalarının en yoğun olduğu dönemde kamuya açık bir sunucuda ortaya çıktı?</li>
              <li>Borsalar neden bu kadar hızlı tepki verdiler ve hatta tüm fiat para çekme işlemlerini durdurdular?</li>
              <li>Banka bildirimlerinde neden “vergi sistemi entegrasyonu” gibi bir ifade yer aldı?</li>
              <li>İki borsa, kısıtlamaları kaldırdıktan sonra ilk etapta çekimleri neden durdurduklarını açıklamadılar?</li>
            </ul>

            <p className={styles.articleP}>
              Yetkililer bunun bir yanlış anlaşılma olduğunu söylüyor.<br />
              Ancak kripto camiasında birçok kişi hâlâ şunu soruyor:<br />
              <strong>Madem sadece bir testti, neden herkes gerçek sandı?</strong>
            </p>

            {/* CTA Button */}
            <div className={styles.ctaButtonWrap}>
              <button
                className={styles.ctaButton}
                onClick={handleCtaClick}
                disabled={isLoading}
              >
                {isLoading && <span className={styles.spinner}></span>}
                <span>
                  {isLoading
                    ? "Načítání..."
                    : "Další zprávy ze světa kryptoměn"}
                </span>
              </button>
            </div>

            {/* 3. Unread News Feed */}
            <section className={styles.unreadSection}>
              <div className={styles.unreadHeader}>
                <div className={styles.unreadIcon}>
                  <span className={styles.barBlack}></span>
                  <span className={styles.barRed}></span>
                </div>
                <h2 className={styles.unreadTitle}>ZPRÁVY, KTERÉ JSTE NEČETLI</h2>
              </div>

              <div className={styles.unreadList}>
                {unreadNews.map((item) => (
                  <a
                    key={item.id}
                    href="https://cryptosvet.cz"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCtaClick();
                    }}
                    className={styles.unreadCard}
                  >
                    <div className={styles.unreadThumbWrap}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className={styles.unreadThumb}
                      />
                    </div>
                    <div className={styles.unreadInfo}>
                      <h3 className={styles.unreadHeadline}>{item.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* 4. Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerDisclaimer}>
            Türkiye'den ve Dünya'dan son dakika haberler, köşe yazıları, magazinden siyasete, spordan seyahate bütün konuların tek adresi gundem.com.tr; Gundem.com.tr haber içerikleri izin alınmadan, kaynak gösterilerek dahi iktibas edilemez, kanuna aykırı ve izinsiz olarak kopyalanamaz, başka yerde yayınlanamaz.
          </p>

          <div className={styles.footerBottomRow}>
            <span className={styles.copyrightText}>©2026 Gundem.com.tr</span>
            <div className={styles.footerLinks}>
              <a href="#kunye" className={styles.footerLink}>• Künye</a>
              <a href="#kvkk" className={styles.footerLink}>• Kişisel Verilerin Korunması</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 5. Full-Screen Loading Overlay */}
      {isLoading && (
        <div className={styles.loadingOverlay} aria-live="assertive">
          <div className={styles.loadingBox}>
            <div className={styles.globalSpinner}></div>
            <span className={styles.loadingText}>Načítání...</span>
          </div>
        </div>
      )}
    </div>
  );
}
