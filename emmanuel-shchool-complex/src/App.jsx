import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Header from './Components/header/Header'
import './App.css'
import  './Components/header/header.css'
import About from './Pages/About'
import Accademics from './Pages/Accademics'
import Admission from './Pages/Admission'           
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Home from './Pages/Home'


const App = () => {
  return (
    <div>
        <Router>
                  <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/academics' element={<Accademics />} />
                <Route path='/admission' element={<Admission />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>


    </div>
  )
}

export default App
