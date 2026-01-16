import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Coorses from './Components/Coorses.jsx'
import Navebar from './Components/Navebar.jsx'
import Footer from './Components/Footer.jsx'
import Webdevelop from './Components/Webdevelop.jsx'
import Graphic from './Components/Graphic.jsx'
import Pagenotfound from './Pagenotfound.jsx'
import Courseerror from './Components/Courseerror.jsx'
import Nav from './Components/Nav.jsx'
import Card from './Components/card.jsx'



 function App() {
   const [search, setSearch] = useState("");
  const navigate = useNavigate("");

  const handleSearch = () => {
    const query = search.toLowerCase().trim();

    if (query === "home") navigate("/home");
    else if (query === "about") navigate("/about");
    else if (query === "coorses") navigate("/coorses");
        else  navigate("/pagenotfound");

  };
  return (
    <div>
      <center><span>haniyakhan5674@gmail.com</span></center>
              <marquee behavior="left" direction="left" className="bom">Pay online for Free Shooping Pay online for Free Shipping Pay Online for Free Shipping Pay online for Free Shipping~ Pay online for Free Shipping </marquee>

        <Navebar/><br />
         <header className="header">
      <div className="logo">
        <span className="logo-box">M</span>
        <span>DISCOVER ▾</span>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title, author or keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        
      </div>

      
    </header>
  
       <Routes>
      
        <Route path='/' element={<Home/>}/>
<Route path ='/Home' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Coorses' element={<Coorses/>}>
<Route path='Webdevelop' element={<Webdevelop/>}/>
<Route path='Graphic' element={<Graphic/>}/>
</Route>
    {/* <Route Path='/course/:id' element={<Courseerror/>}/>  */}
    <Route path='*' element={<Pagenotfound/>}/>
     </Routes>
      {/* <Home/> */}
     {/* <About/> */}
     {/* <Coorses/> */}
     {/* <Webdevelop/> */}
     
     <Card />

     <br /><br /> <Footer />


    </div>

  )
}

export default App