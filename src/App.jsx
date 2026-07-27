import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureStrip from './components/FeatureStrip'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import FeaturedProperties from './components/FeaturedProperties'
import Insights from './components/Insights'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <FeatureStrip />
        <TrustedBy />
        <About />
        <Services />
        <FeaturedProperties />
        <Insights />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}
