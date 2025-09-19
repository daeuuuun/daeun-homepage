import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import styles from '../style/ExpertisePage.module.css';

const charts = [
  {
    title: '성격',
    subtitle: '나를 이루는 핵심 성향',
    color: '#e91e63',
    data: [
      { subject: '섬세함', value: 10 },
      { subject: '집중력', value: 9 },
      { subject: '성실함', value: 9 },
      { subject: '적응력', value: 7 },
      { subject: '소통', value: 7 },
      { subject: '책임감', value: 8 },
    ],
  },
  {
    title: '개발 스킬',
    subtitle: '나를 빛내는 핵심 개발 역량',
    color: '#ff9800',
    data: [
      { subject: 'React', value: 10 },
      { subject: 'CSS', value: 9 },
      { subject: 'TS', value: 8 },
      { subject: 'UI/UX 구현', value: 8 },
      { subject: 'Git', value: 8 },
      { subject: 'JS', value: 9 },
    ],
  },
  {
    title: '협업·성장 스타일',
    subtitle: '나를 더 나은 개발자로 만드는 팀워크',
    color: '#009688',
    data: [
      { subject: '문제 해결력', value: 9 },
      { subject: '우선순위', value: 8 },
      { subject: '팀워크', value: 8 },
      { subject: '학습 속도', value: 9 },
      { subject: '꾸준함', value: 9 },
      { subject: '수용력', value: 9 },
    ],
  },
];

function ChartBlock({ chart, size }: { chart: typeof charts[number]; size: number }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.subtitle}>{chart.subtitle}</h3>
      <h2 className={styles.title}>{chart.title}</h2>
      <div className={styles.chartBox} style={{ width: size, height: size }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="70%" data={chart.data}>
            <PolarGrid stroke="#555" />
            <PolarAngleAxis dataKey="subject" stroke="#fff" tick={{ fontSize: Math.max(size / 25, 12) }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
            <Radar dataKey="value" stroke={chart.color} fill={chart.color} fillOpacity={0.45} dot={false} activeDot={false}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function ExpertisePage() {
  const [index, setIndex] = useState(0);
  const prevIndex = (index - 1 + charts.length) % charts.length;
  const nextIndex = (index + 1) % charts.length;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex(nextIndex),
    onSwipedRight: () => setIndex(prevIndex),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const isMobile = width < 768;
  const centerSize = isMobile ? Math.min(width * 0.85, 400) : Math.min(width * 0.45, 650);

  return (
    <div className={styles.carouselContainer} {...handlers}>
      {!isMobile && (
        <button className={styles.side} onClick={() => setIndex(prevIndex)} aria-label="이전 그래프">
          <ChartBlock chart={charts[prevIndex]} size={centerSize * 0.65} />
        </button>
      )}

      <motion.div
        key={index}
        className={styles.center}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ChartBlock chart={charts[index]} size={centerSize} />
      </motion.div>

      {!isMobile && (
        <button className={styles.side} onClick={() => setIndex(nextIndex)} aria-label="다음 그래프">
          <ChartBlock chart={charts[nextIndex]} size={centerSize * 0.65} />
        </button>
      )}
    </div>
  );
}