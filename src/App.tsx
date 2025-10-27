import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'

function App() {

  return (
    <div
      className='grid grid-cols-[355px_1fr]'
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
