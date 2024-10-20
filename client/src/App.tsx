import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Products from './pages/Products'
import Carts from './pages/Carts'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'
import Articles from './pages/Articles'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/article" element={<Articles/>}/>
      </Routes>
    </div>
  )
}

export default App
