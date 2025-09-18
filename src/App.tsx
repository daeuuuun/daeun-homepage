import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import TitlePage from './pages/TitlePage';

export default function App() {
  const sectionStyle = {
    minHeight: '100vh',
    padding: '4rem',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
  };

  return (
    <>
      <Header />
      <section id='title'>
        <TitlePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="expertise">
        <ExpertisePage />
      </section>
      <section id="projects" style={{ ...sectionStyle, background: '#555' }}>
        <h1>Projects</h1>
        <p>프로젝트 내용...</p>
      </section>
      <section id="contact" style={{ ...sectionStyle, background: '#666' }}>
        <h1>Contact</h1>
        <p>연락처 내용...</p>
      </section>
    </>
  );
}
