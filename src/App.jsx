import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full">
        <section id="home" className="min-h-screen w-full pt-16">
          <Home />
        </section>
        
        <section id="about" className="min-h-screen w-full">
          <About />
        </section>

        <section id="experience" className="min-h-screen w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
            {/* Add your experience content here */}
          </div>
        </section>

        <section id="projects" className="min-h-screen w-full">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen w-full">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default App
