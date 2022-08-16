import './App.css'
import Filters from './React/Filters'
import Header from './React/Header'
import Map from './React/Map'


function App() {
  return (
    <div className="container">
      <section className="filters">
        <Header />
        <Filters />
      </section>
      <Map />


    </div>
  )
}

export default App
