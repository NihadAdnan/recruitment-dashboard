import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Application from './pages/Application'
import NewJob from './pages/NewJob'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/application' element={<Application/>}/>
      <Route path='/createJob' element={<NewJob/>}/>
    </Routes>
    </BrowserRouter>
  )
}
