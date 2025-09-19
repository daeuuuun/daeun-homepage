import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from '../style/TitlePage.module.css';

const before = '프론트엔드 개발자 ';
const name = '장다은';
const after = '입니다';

export default function TitlePage() {
  const controls = useAnimation();
  const hover = { color: 'var(--color-dark-pink)', rotate: -5, scale: 1.1, transition: { duration: 0.3 } };

  useEffect(() => {
    const delay = 0.8 + (before.length + 1 + after.length) * 0.05 + 0.5;
    controls.set({ opacity: 1, color: '#fff', rotate: 0 });

    const timer = setTimeout(async () => {
      await controls.start({ color: 'var(--color-dark-pink)', rotate: [0, -10, 10, -5, 5, 0], opacity: 1, transition: { duration: 0.8 } });
      await controls.start({ color: '#fff', rotate: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } });
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [controls]);

  const animatedChars = (text: string, startDelay: number) =>
    Array.from(text).map((char, i) => (
      <motion.span key={`${text}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: startDelay + i * 0.05, duration: 0.5 }}>
        {char}
      </motion.span>
    ));

  return (
    <main className={styles.titleMain} id="title">
      <motion.p className={styles.textP} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.span animate={controls} whileHover={hover} className={styles.bigBold}>사용자</motion.span> 의{' '}
        <motion.span animate={controls} whileHover={hover} className={styles.bigBold}>관점</motion.span> 에서 생각하며
      </motion.p>

      <motion.p className={styles.textP} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <motion.span animate={controls} whileHover={hover} className={styles.bigLight}>섬세함</motion.span> 으로{' '}
        <motion.span animate={controls} whileHover={hover} className={styles.bigBold}>완성도</motion.span> 를 높이는
      </motion.p>

      <p className={styles.textP}>
        {animatedChars(before, 0.8)}
        <motion.strong className={styles.bigBold} animate={controls} whileHover={hover} initial={{ opacity: 0, y: 10 }} transition={{ delay: 0.8 + before.length * 0.05, duration: 0.5 }}>
          {name}
        </motion.strong>
        {animatedChars(after, 0.8 + before.length * 0.05 + 0.05)}
      </p>
    </main>
  );
}
