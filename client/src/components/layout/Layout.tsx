import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
type Tlayout = {
    children : React.ReactNode
}
function Layout({children}:Tlayout) {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout