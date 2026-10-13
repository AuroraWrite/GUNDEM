import Link from "next/link";
import { getArticleBySlug, getOtherArticles, articles } from "@/data/articles";
import CtaButton from "./CtaButton";
import styles from "./article.module.css";

export async function generateStaticParams() {
  return articles.flatMap((item) => [
    { slug: item.slug },
    { slug: String(item.id) },
  ]);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Haber Bulunamadı — Gundem.com.tr",
    };
  }

  return {
    title: `${article.title} — Gundem.com.tr`,
    openGraph: {
      title: article.title,
      images: [{ url: article.img }],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logoLink} aria-label="Turk Portal">
              <img src="/images/turk-portal-horizontal.png" alt="Turk Portal" className={styles.logoImg} />
            </Link>
          </div>
        </header>
        <main className={styles.mainContainer}>
          <h1 className={styles.articleTitle}>Haber bulunamadı</h1>
          <div style={{ marginTop: "20px" }}>
            <Link href="/" className={styles.backHomeLink}>
              ← Ana sayfaya dön
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const otherArticles = getOtherArticles(article.slug);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header (NTV / Turk Portal Style) */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
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

          <Link href="/" className={styles.logoLink} aria-label="Turk Portal">
            <img
              src="/images/turk-portal-horizontal.png"
              alt="Turk Portal"
              className={styles.logoImg}
            />
          </Link>

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

      {/* 2. Sub-navigation */}
      <nav className={styles.subNav}>
        <div className={styles.subNavInner}>
          <div className={styles.navLeft}>
            <Link href="/" className={styles.backHomeLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Ana Sayfa</span>
            </Link>
          </div>

          <div className={styles.navRight}>
            <div className={styles.liveTag}>
              <span className={styles.liveDot}></span>
              <span>CANLI</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Main Article Content - Strictly Title and Image */}
      <main className={styles.mainContainer}>
        <article className={styles.articleCard}>
          {/* Headline */}
          <h1 className={styles.articleTitle}>{article.title}</h1>

          {/* Image */}
          <div className={styles.articleImageWrap}>
            <img
              src={article.img}
              alt={article.title}
              className={styles.articleImage}
            />
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            {article.lead && (
              <p className={styles.articleLead}>{article.lead}</p>
            )}
            {article.paragraphs?.map((p, idx) => (
              <p key={idx} className={styles.articleP}>{p}</p>
            ))}
          </div>

          {/* Black CTA Button */}
          <CtaButton />
        </article>

        {/* 4. Other Unread Articles */}
        <section className={styles.unreadSection}>
          <div className={styles.unreadHeader}>
            <div className={styles.unreadIcon}>
              <span className={styles.barBlack}></span>
              <span className={styles.barRed}></span>
            </div>
            <h2 className={styles.unreadTitle}>ZPRÁVY, KTERÉ JSTE NEČETLI</h2>
          </div>

          <div className={styles.unreadList}>
            {otherArticles.map((item) => (
              <Link
                key={item.id}
                href={`/clanky/${item.slug}`}
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
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerDisclaimer}>
            Türkiye&apos;den ve Dünya&apos;dan son dakika haberler, köşe yazıları, magazinden siyasete, spordan seyahate bütün konuların tek adresi gundem.com.tr; Gundem.com.tr haber içerikleri izin alınmadan, kaynak gösterilerek dahi iktibas edilemez, kanuna aykırı ve izinsiz olarak kopyalanamaz, başka yerde yayınlanamaz.
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
    </div>
  );
}
