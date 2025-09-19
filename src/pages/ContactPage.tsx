import React, { useState, useEffect } from "react";
import styles from "../style/ContactPage.module.css";
import call from "../assets/img/image-5.png";
import email from "../assets/img/—Pngtree—email-vector-icon_3791384.png";
import github from "../assets/img/image-3.png";

const ContactPage: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(`${text} 복사됨`);
    });
  };

  useEffect(() => {
    if (copiedText) {
      const timer = setTimeout(() => setCopiedText(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedText]);

  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>THANKS FOR WATCHING</h2>
      <h1 className={styles.title}>CONTACT</h1>

      <div className={styles.contactList}>
        <div
          className={styles.contactItem}
          onClick={() => copyToClipboard("010-7544-0838")}
          role="button"
          tabIndex={0}
        >
          <div className={styles.iconBox}>
            <img className={styles.image} src={call} alt="연락처" />
          </div>
          <div>
            <p className={styles.label}>CALL</p>
            <p className={styles.value}>010-7544-0838</p>
          </div>
        </div>

        <div
          className={styles.contactItem}
          onClick={() => copyToClipboard("eowlfhd02@naver.com")}
          role="button"
          tabIndex={0}
        >
          <div className={styles.iconBox}>
            <img className={styles.image} src={email} alt="이메일" />
          </div>
          <div>
            <p className={styles.label}>EMAIL</p>
            <p className={styles.value}>eowlfhd02@naver.com</p>
          </div>
        </div>

        <a
          href="https://github.com/daeuuuun"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.contactItem} ${styles.githubLink}`}
        >
          <div className={styles.iconBox}>
            <img className={styles.image} src={github} alt="깃허브" />
          </div>
          <div>
            <p className={styles.label}>GITHUB</p>
            <p className={styles.value}>https://github.com/daeuuuun</p>
          </div>
        </a>
      </div>

      <p className={styles.footer}>© 2025 - All rights reserved.</p>

      {copiedText && <div className={styles.toast}>{copiedText}</div>}
    </div>
  );
};

export default ContactPage;