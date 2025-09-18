import styles from '../style/AboutPage.module.css';
import email from '../assets/img/—Pngtree—email-vector-icon_3791384.png';
import github from '../assets/img/image-3.png';

export default function AboutPage() {
  return (
    <main className={styles.aboutMain} id="about">
      <div className={styles.profileCard}>
        <div className={styles.avatar} />
        <h2 className={styles.name}>장다은</h2>
        <p className={styles.birth}>2002.05.10</p>
        <span className={styles.role}>Frontend Developer</span>

        <hr className={styles.line} />

        <div className={styles.tags}>
          <span>#DetailOriented</span>
          <span>#UserFocused</span>
          <span>#TeamPlayer</span>
          <span>#AlwaysImproving</span>
        </div>

        <div className={styles.links}>
          <div className={styles.linkItem}>
            <div className={styles.iconBox}>
              <img className={styles.icon} src={email} alt="이메일" />
            </div>
            <p>eowlfhd02@naver.com</p>
          </div>

          <div className={styles.linkItem}>
            <div className={styles.iconBox}>
              <img className={styles.icon} src={github} alt="깃허브" />
            </div>
            <p>
              <a href="https://github.com/daewuuun" target="_blank" rel="noreferrer">
                github.com/daewuuun
              </a>
            </p>
          </div>
        </div>

        <p className={styles.signature}>Daeun</p>
      </div>

      {/* 오른쪽 정보 카드 */}
      <div className={styles.infoCard}>
        <h3 className={styles.sectionTitle}>About Me</h3>
        <p className={styles.description}>
          &nbsp;사용자의 입장에서 생각하며 <strong>섬세한 디테일</strong>로 프로젝트의 완성도를 높여온
          프론트엔드 개발자 장다은입니다. <br />
          ‘교내 코드 리뷰 커뮤니티’와 지역 음식점 리뷰 서비스 ‘푸드남도’ 프로젝트를 통해
          <strong> React</strong>를 활용한 프로젝트를 구현하며 협업과 코드 품질 관리의 중요성을 몸소
          체험했습니다. 이 과정에서 GitHub을 통한 버전 관리와 코드 리뷰 문화를 익혔고
          디자인과 사용자 경험 사이의 균형을 맞추는 감각을 발전시켰습니다. <br />
          앞으로는 사용자 경험 중심의 인터페이스를 한층 더 깊이 탐구하고
          <strong> 최신 웹 기술과 트렌디한 UI 패턴</strong>을 적극적으로 배우며 성장하고자 합니다.
          단순히 동작하는 웹이 아니라
          <strong> 사람들이 사용하며 즐거움을 느낄 수 있는 웹 경험</strong>을 만들어가는 개발자가 되는 것이
          저의 목표입니다.
        </p>

        <h3 className={styles.sectionTitle}>Education</h3>
        <ul className={styles.education}>
          <li>
            <span className={styles.period}>2025.06 ~ 2025.12</span>
            <span>기업맞춤 프론트엔드 웹디자인 부트캠프 수료</span>
          </li>
          <li>
            <span className={styles.period}>2025.08</span>
            <span>국립금오공과대학교 컴퓨터소프트웨어공학과 졸업</span>
          </li>
          <li>
            <span className={styles.period}>2021.02</span>
            <span>대구서부고등학교 졸업</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
