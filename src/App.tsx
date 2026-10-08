
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Travel from './pages/Travel'
import ThingsToDo from './pages/ThingsToDo'
import FAQ from './pages/FAQ'
import Registry from './pages/Registry'
import Gallery from './pages/Gallery'


function App() {

  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/ThingsToDo" element={<ThingsToDo />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Registry" element={<Registry />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
