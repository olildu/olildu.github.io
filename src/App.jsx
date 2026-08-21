import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';

/**
 * Main application entry point.
 * Assembles the landing page components in order.
 */
function App() {
  return (
    <div className="app-container">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <OpenSource />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
