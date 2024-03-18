import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Application from './pages/Application'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/application' element={<Application/>}/>
    </Routes>
    </BrowserRouter>
  )
}
