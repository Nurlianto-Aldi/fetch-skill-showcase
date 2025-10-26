import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}
          ></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
