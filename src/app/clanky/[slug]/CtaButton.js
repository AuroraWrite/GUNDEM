"use client";

import { useState } from "react";
import styles from "./article.module.css";

export default function CtaButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCtaClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://cryptosvet.cz";
    }, 5000);
  };

  return (
    <>
      <div className={styles.ctaButtonWrap}>
        <button
          className={styles.ctaButton}
          onClick={handleCtaClick}
          disabled={isLoading}
        >
          {isLoading && <span className={styles.spinner}></span>}
          <span>
            {isLoading
              ? "Yükleniyor..."
              : "Kripto Para hakkında daha fazla haber"}
          </span>
        </button>
      </div>

      {isLoading && (
        <div className={styles.loadingOverlay} aria-live="assertive">
          <div className={styles.loadingBox}>
            <div className={styles.globalSpinner}></div>
            <span className={styles.loadingText}>Yükleniyor...</span>
          </div>
        </div>
      )}
    </>
  );
}
