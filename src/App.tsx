import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectsPage from './pages/ProjectsPage';
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
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </>
  );
}
