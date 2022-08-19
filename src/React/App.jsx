import '../styles/app.css'
import Map from './Map'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useStore } from 'react-redux'
import { useEffect } from 'react'
import { getBrands } from '../services/getBrands'
import { getFacilities } from '../services/getFacilities'
import Header from './Header'
import Search from './Search'
import Facilities from './Facilities'
import Details from './Details'

function App() {
  const store = useStore()

  useEffect(() => {
    getBrands(store)
  }, [store])
  useEffect(() => {
    getFacilities(store)
  }, [store])

  return (
    <BrowserRouter>
      <div className="container">
        <aside className="aside">
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/facilities/:id" element={<Details />} />
            <Route path="/facilities/*" element={<Search />} />
            <Route path="/*" element={<Search />} />
          </Routes>
        </aside>
        <Map />
      </div>
    </BrowserRouter>
  )
}

export default App
