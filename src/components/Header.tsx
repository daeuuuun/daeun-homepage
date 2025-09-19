import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState, type ElementType } from 'react';
import { FiMenu as FiMenuIcon, FiX as FiXIcon } from 'react-icons/fi';
import styles from '../style/Header.module.css';

const FiMenu = FiMenuIcon as unknown as ElementType;
const FiX = FiXIcon as unknown as ElementType;

const labels = [
  { to: 'title', eng: 'Title', kor: '메인' },
  { to: 'about', eng: 'About', kor: '소개' },
  { to: 'expertise', eng: 'Expertise', kor: '경험' },
  { to: 'projects', eng: 'Projects', kor: '프로젝트' },
  { to: 'contact', eng: 'Contact', kor: '연락처' },
];

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>('title');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.glassHeader} ${menuOpen ? styles.menuOpen : ''}`}>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.headerUl}>
          {labels.map(({ to, eng, kor }) => (
            <li
              key={to}
              className={styles.menuItem}
              onMouseEnter={() => setHovered(to)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setMenuOpen(false)}
            >
              <Link
                to={to}
                smooth={true}
                duration={600}
                spy={true}
                onSetActive={(id) => setActive(id)}
                className={`${styles.link} ${active === to ? styles.active : ''}`}
              >
                {active !== to && (
                  <>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: hovered === to ? '-100%' : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {eng}
                    </motion.div>
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: hovered === to ? 0 : '100%' }}
                      transition={{ duration: 0.25 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        textAlign: 'center',
                      }}
                    >
                      {kor}
                    </motion.div>
                  </>
                )}
                {active === to && eng}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
