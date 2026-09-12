import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#020617] text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
