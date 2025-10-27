import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ProjectRouteWrapper from './pages/ProjectRouteWrapper'

function App() {

  return (
    <div
      className='grid grid-cols-[355px_1fr]'
    >
      <Header />
      <main
        className='flex items-center justify-center bg-[#D3C2CD]'
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/project/:link" element={<ProjectRouteWrapper />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
