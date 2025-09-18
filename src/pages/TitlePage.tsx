import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from '../style/TitlePage.module.css';

const before = '프론트엔드 개발자 ';
const name = '장다은';
const after = '입니다';

export default function TitlePage() {
  const emphasizeControls = useAnimation();

  useEffect(() => {
    const totalChars = before.length + 1 + after.length; // name은 덩어리
    const endDelay = 0.8 + totalChars * 0.05 + 0.5;

    emphasizeControls.set({ opacity: 1, color: '#fff', rotate: 0 });

    const timer = setTimeout(async () => {
      await emphasizeControls.start({
        color: '#e91e63',
        rotate: [0, -10, 10, -5, 5, 0],
        opacity: 1,
        transition: { duration: 0.8 },
      });

      await emphasizeControls.start({
        color: '#fff',
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.4 },
      });
    }, endDelay * 1000);

    return () => clearTimeout(timer);
  }, [emphasizeControls]);

  const hoverEffect = {
    color: 'var(--color-dark-pink)',
    rotate: -5,
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  return (
    <main className={styles.titleMain} id="title">
      {/* 첫 번째 줄 */}
      <motion.p
        className={styles.textP}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <motion.span animate={emphasizeControls} whileHover={hoverEffect} className={styles.bigBold}>
          사용자
        </motion.span>
        의{' '}
        <motion.span animate={emphasizeControls} whileHover={hoverEffect} className={styles.bigBold}>
          관점
        </motion.span>
        에서 생각하며
      </motion.p>

      {/* 두 번째 줄 */}
      <motion.p
        className={styles.textP}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.span animate={emphasizeControls} whileHover={hoverEffect} className={styles.bigLight}>
          섬세함
        </motion.span>
        으로{' '}
        <motion.span animate={emphasizeControls} whileHover={hoverEffect} className={styles.bigBold}>
          완성도
        </motion.span>
        를 높이는
      </motion.p>

      {/* 세 번째 줄 */}
      <p className={styles.textP}>
        {Array.from(before).map((char, i) => (
          <motion.span
            key={`b-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}

        <motion.strong
          className={styles.bigBold}
          animate={emphasizeControls}
          whileHover={hoverEffect}
          initial={{ opacity: 0, y: 10 }}
          transition={{
            delay: 0.8 + before.length * 0.05,
            duration: 0.5,
          }}
        >
          {name}
        </motion.strong>

        {Array.from(after).map((char, i) => (
          <motion.span
            key={`a-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8 + (before.length + 1 + i) * 0.05,
              duration: 0.5,
            }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </main>
  );
}
