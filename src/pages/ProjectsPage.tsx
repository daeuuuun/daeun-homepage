import React, { useState } from "react";
import styles from "../style/ProjectsPage.module.css";
import { FaCircle, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

import qna2023 from "../assets/img/[Q&A] 게시물 상세 조회 화면.png";
import qna2024 from "../assets/img/리뷰.png";
import qna2025 from "../assets/img/image.png";

const tabs = ["2023", "2024", "2025"];

const tabContents: Record<
  string,
  { title: string; desc: string; image: string; features: string[]; git: string }
> = {
  "2023": {
    title: "Q&A & 코드 리뷰 커뮤니티",
    desc: "학생 간 Q&A와 코드 리뷰를 통해 지식 공유와 성장을 돕는 교내 커뮤니티",
    image: qna2023,
    git: "https://github.com/daeuuuun/School_Board_Project",
    features: [
      "프론트엔드 주요 기능 구현 및 UI/UX 담당",
      "글 등록, 수정, 삭제 기능을 구현하며 API와 연동하여 서버와 데이터가 실시간으로 반영되도록 개발",
      "Axios를 활용해 백엔드와의 통신 로직을 구축하고, 요청/응답 처리 시 사용자 경험을 고려한 에러 핸들링과 로딩 상태를 구현",
      "게시글 리스트 및 상세 화면에서 UI/UX 흐름을 설계하고, 사용자가 직관적으로 글을 작성/수정할 수 있도록 폼 구조와 인터랙션을 최적화",
      "상태 관리 기법(Context)을 적용해 글 작성 후 즉시 화면에 반영되는 실시간 피드백 경험을 제공",
    ],
  },
  "2024": {
    title: "푸드남도",
    desc: "경남·전남 지역 맛집 리뷰와 사진 기반 유사 맛집 추천을 제공하는 웹 서비스",
    image: qna2024,
    git: "https://github.com/daeuuuun/FoodNamdo_Project",
    features: [
      "프론트엔드 주요 기능 구현 및 UI/UX 담당",
      "사용자별 추천 음식점 노출 기능을 React 상태 관리와 조건부 렌더링을 통해 구현하여 실시간 개인화된 UI를 제공",
      "리뷰 작성·수정·삭제, 공감 기능, 영수증 인증 UI를 개발하며 Axios 기반의 API 통신과 로딩/에러 처리 로직을 적용해 안정적인 사용자 경험을 보장",
      "마이페이지 영역은 정보 조회, 비밀번호 변경, 작성 리뷰·도전 과제 내역 등을 독립적인 컴포넌트 단위로 설계하여 유지보수성과 재사용성을 높임",
      "Context API를 활용해 리뷰 작성 후 즉시 반영되는 실시간 피드백 경험을 구현",
    ],
  },
  "2025": {
    title: "Dashboard",
    desc: "프로젝트 및 데이터 현황을 한눈에 확인하고 직관적인 UI로 관리·분석 기능을 제공하는 웹 서비스",
    image: qna2025,
    git: "https://github.com/daeuuuun/base",
    features: [
      "Material UI와 Tailwind CSS를 활용해 기존 디자인 시안을 웹 환경으로 이식하며 최신 UI 프레임워크와 스타일링 기법을 실제 프로젝트에 적용",
      "레이아웃과 컴포넌트 구조를 정리해 유지보수성과 확장성을 높였고 직관적인 대시보드형 UI를 완성",
      "최근 널리 사용되는 기술을 직접 익히고 실무 감각을 기르기 위해 시도한 프로젝트로 새로운 도구를 빠르게 학습하고 적용하는 능력을 보여줌",
      "차트와 그래프를 통해 실시간 판매 추이와 거래 통계를 시각화하여 데이터 기반 의사결정에 도움을 제공",
      "사이드바 내비게이션과 카드형 레이아웃을 활용해 사용자 경험(UX)을 직관적이고 깔끔하게 구성",
      "거래 내역, 인기 상품, 분석 그래프 등 여러 모듈이 한 화면에서 조화를 이루도록 UI를 구성",
    ],
  },
};

const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("2023");
  const { title, desc, image, features, git } = tabContents[activeTab];

  const handleGitClick = () => {
    window.open(git, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.tabBar}>
          <div className={styles.macButtons}>
            <FaCircle className={styles.close} />
            <FaCircle className={styles.minimize} />
            <FaCircle className={styles.maximize} />
          </div>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <FaPlus className={styles.plusIcon} />
        </div>

        <div className={styles.addressBar}>
          <FaChevronLeft className={styles.icon} />
          <FaChevronRight className={styles.icon} />
          <AiOutlineReload className={styles.icon} />
          <input
            type="text"
            value={`https://www.${activeTab.toLowerCase()}project.com`}
            readOnly
            className={styles.addressInput}
          />
          <FiUser className={styles.icon} />
        </div>

        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h2 className={styles.year}>{activeTab}</h2>
            <h1 className={styles.title}>
              {title}
              <button className={styles.gitBtn} onClick={handleGitClick}>
                Git →
              </button>
            </h1>
            <p className={styles.desc}>{desc}</p>
            <hr className={styles.line} />
            <ul className={styles.features}>
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {["React", "JavaScript", "Axios", "Context", "React Router", "GitHub", "Figma"].map(
                (tag) => (
                  <span key={tag}>{tag}</span>
                )
              )}
            </div>
          </div>
          <div className={styles.rightImage}>
            <img src={image} alt={`${activeTab} 프로젝트`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
