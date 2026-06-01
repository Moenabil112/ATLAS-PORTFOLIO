import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProcessingFacility from './pages/ProcessingFacility'
import HyrionGovernance from './pages/HyrionGovernance'
import Akanil from './pages/Akanil'
import AtlasMining from './pages/AtlasMining'
import OfftakeModel from './pages/OfftakeModel'
import PrivateDataRoom from './pages/PrivateDataRoom'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-obsidian">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facility" element={<ProcessingFacility />} />
            <Route path="/hyrion" element={<HyrionGovernance />} />
            <Route path="/akanil" element={<Akanil />} />
            <Route path="/atlas-mining" element={<AtlasMining />} />
            <Route path="/offtake" element={<OfftakeModel />} />
            <Route path="/data-room" element={<PrivateDataRoom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  )
}
