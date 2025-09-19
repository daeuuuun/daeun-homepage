import styles from '../style/AboutPage.module.css';
import email from '../assets/img/—Pngtree—email-vector-icon_3791384.png';
import github from '../assets/img/image-3.png';

export default function AboutPage() {
  return (
    <main className={styles.aboutMain} id="about">
      <section className={styles.profileCard}>
        <div className={styles.avatar} />
        <h2 className={styles.name}>장다은</h2>
        <p className={styles.birth}>2002.05.10</p>
        <span className={styles.role}>Frontend Developer</span>

        <hr className={styles.line} />

        <div className={styles.tags}>
          {['#DetailOriented', '#UserFocused', '#TeamPlayer', '#AlwaysImproving'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a className={styles.linkItem} href="mailto:eowlfhd02@naver.com">
            <div className={styles.iconBox}><img className={styles.icon} src={email} alt="이메일" /></div>
            eowlfhd02@naver.com
          </a>
          <a className={styles.linkItem} href="https://github.com/daeuuuun" target="_blank" rel="noreferrer">
            <div className={styles.iconBox}><img className={styles.icon} src={github} alt="깃허브" /></div>
            github.com/daeuuuun
          </a>
        </div>

        <p className={styles.signature}>Daeun</p>
      </section>

      <section className={styles.infoCard}>
        <h3 className={styles.sectionTitle}>About Me</h3>
        <p className={styles.description}>
          사용자의 입장에서 생각하며 <strong>섬세한 디테일</strong>로 프로젝트의 완성도를 높여온
          프론트엔드 개발자 장다은입니다.<br />
          ‘교내 코드 리뷰 커뮤니티’와 ‘푸드남도’ 프로젝트를 통해
          <strong> React</strong> 기반 협업과 코드 품질 관리의 중요성을 배웠고,
          GitHub을 활용해 버전 관리와 코드 리뷰 문화를 익혔습니다.<br />
          앞으로 <strong>최신 웹 기술과 트렌디한 UI</strong>를 배우며 사용자 중심의 즐거운 웹 경험을
          만들어가는 개발자로 성장하고자 합니다.
        </p>

        <h3 className={styles.sectionTitle}>Education</h3>
        <ul className={styles.education}>
          <li><span className={styles.period}>2025.06 ~ 2025.12</span>기업맞춤 프론트엔드 웹디자인 부트캠프 수료</li>
          <li><span className={styles.period}>2025.08</span>국립금오공과대학교 컴퓨터소프트웨어공학과 졸업</li>
          <li><span className={styles.period}>2021.02</span>대구서부고등학교 졸업</li>
        </ul>
      </section>
    </main>
  );
}