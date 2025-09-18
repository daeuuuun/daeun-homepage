import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import styles from '../style/ExpertisePage.module.css';

const charts = [
  {
    title: '성격',
    subtitle: '나를 이루는 세 가지 면',
    color: '#e91e63',
    data: [
      { subject: '섬세함', value: 10 },
      { subject: '집중력', value: 9 },
      { subject: '성실함', value: 9 },
      { subject: '적응력', value: 7 },
      { subject: '협력·소통', value: 7 },
      { subject: '책임감', value: 8 },
    ],
  },
  {
    title: '개발 스킬',
    subtitle: '나를 이루는 세 가지 면',
    color: '#ff9800',
    data: [
      { subject: 'React', value: 10 },
      { subject: 'CSS', value: 9 },
      { subject: 'UI/UX 구현 능력', value: 8 },
      { subject: 'TypeScript', value: 7 },
      { subject: 'Git/GitHub 협업', value: 8 },
      { subject: 'JavaScript', value: 9 },
    ],
  },
  {
    title: '협업·성장 스타일',
    subtitle: '나를 이루는 세 가지 면',
    color: '#009688',
    data: [
      { subject: '문제 해결력', value: 9 },
      { subject: '우선순위 설정', value: 8 },
      { subject: '협력 에너지', value: 8 },
      { subject: '학습 속도', value: 9 },
      { subject: '꾸준함', value: 9 },
      { subject: '피드백 수용', value: 9 },
    ],
  },
];

export default function ExpertisePage() {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-400, 400], [-120, 120]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -100) {
      setIndex((prev) => (prev + 1) % charts.length);
    } else if (info.offset.x > 100) {
      setIndex((prev) => (prev - 1 + charts.length) % charts.length);
    }
    dragX.set(0);
  };

  const visibleCharts = [
    charts[index % charts.length],
    charts[(index + 1) % charts.length],
    charts[(index + 2) % charts.length],
  ];

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.carousel}
        drag="x"
        style={{ rotate }}
        dragConstraints={{ left: -400, right: 400 }}
        onDragEnd={handleDragEnd}
      >
        {visibleCharts.map((chart, i) => {
          const offset = (i - 1) * 650; // 🔥 간격 크게 조정
          return (
            <motion.div
              key={chart.title}
              className={styles.chartWrapper}
              style={{
                opacity: i === 1 ? 1 : 0.3,
                scale: i === 1 ? 1 : 0.85,
                x: offset,
              }}
            >
              <h3 className={styles.subtitle}>{chart.subtitle}</h3>
              <h2 className={styles.title}>{chart.title}</h2>
              <ResponsiveContainer width={550} height={550}>
                <RadarChart outerRadius={220} data={chart.data}>
                  <PolarGrid stroke="#444" />
                  <PolarAngleAxis dataKey="subject" stroke="#fff" tick={{ fontSize: 22 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                  <Radar dataKey="value" stroke={chart.color} fill={chart.color} fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
