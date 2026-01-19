import React, { useEffect, useRef } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Webdevelop from './Webdevelop'
import Graphic from './Graphic'





 function Coorses() {
   const navigate = useNavigate();
   const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    let speed = 1; // pixels per frame
    let reqId;

    // duplicate content for seamless loop
    bar.innerHTML += bar.innerHTML;

    const scroll = () => {
      if (!bar) return;
      if (bar.scrollLeft >= bar.scrollWidth / 2) {
        bar.scrollLeft = 0; // reset smoothly
      } else {
        bar.scrollLeft += speed;
      }
      reqId = requestAnimationFrame(scroll);
    };

    scroll(); // start animation
    return () => cancelAnimationFrame(reqId); // cleanup
  }, []);
 
  return (
    <div className='box'>
      
      <section class="publisher-section">
  <div class="publisher-header">
    <h2>Shop By Publisher</h2>
    {/* <div class="arrows">
      <span>&larr;</span>
      <span>&rarr;</span>
    </div> */}
  </div>

  <div class="publisher-bar" ref={barRef}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAKXv0SCZiX1BEku6ts1FXZs_eYVUP0ONKQ&s" alt="Hello World Kids"/>
    <img src="https://dictionary.cambridge.org/external/images/og-image.png" alt="Cambridge"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vlL7jzNuPOgaBMubtTvWRhCXxIA0s-g7_Q&s" alt="Elsevier"/>
    <img src="https://paramountbooks.com.pk/cdn/shop/files/9789814883092.jpg?v=1754371259" alt="Marshall Cavendish"/>
    <img src="https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fwp.penguin.co.uk%2Fwp-content%2Fuploads%2F2022%2F05%2FDiscover-bento-logo.png&w=3840&q=75" alt="Penguin"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-nZmuTGWGlVOTjhzMLv9RId1JXXh1L9g9Q&s" alt="MM Publications"/>
    <img src="https://www.memoriapress.com/wp-content/uploads/2020/07/I-Can-Read-It-Book-1.jpg" alt="I Can Read"/>
  </div>
</section>
       <center><h2 className='uu'>MCAT MCQS BOOKS</h2></center>
        
       
        <div class="ecard-container">

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJL9tPwClCqK4VbHZbJSwHH45AotanueM-fQ&s" alt="Physics Book"/>
    <h3>MCAT Physics</h3>
    <p>Complete MCQs</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjRN14tkYzOIuwvDRF7sS06Lz9YrY8TiB6Q&s" alt="Math Book"/>
    <h3>MCAT Biology</h3>
    <p>Important Formulas</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2K4-UltLfewdw0ZCa0L1rweooeWmpq9GPA&s" alt="Chemistry Book"/>
    <h3>MCAT Chemistry</h3>
    <p>Concepts & MCQs</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMnLsJMc4X_ZQHg9sELeJn_Zgzt3vV5UJdQ&s" alt="Practice Book"/>
    <h3>MCAT Practice Book</h3>
    <p>Past Papers</p>
    <button>View Book</button>
  </div>

</div><br /><br />
<center>
   {/* <>
      <button className="graphic" onClick={() => navigate('/Coorses/Webdevelop')}>
        Punjab Board
      </button>
             

      </> */}
             

      <>
      <button className="graphic" onClick={() => navigate('/Coorses/Graphic')}>
        Federal
      </button>
       <Outlet/>
    </>
   
  </center> 
{/* <button><a href="/Coorses/Webdevelop">click me</a></button> */}
<div class="ecard-container">

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzFUy_vECPaQDIPgPi49BT-srWLi009MD2Q&s" alt="Physics Book"/>
    <h3>MCAT Physics</h3>
    <p>Complete MCQs</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtIo76Yc7J3XY_08tURSMPskdivlkOokJHg&s" alt="Math Book"/>
    <h3>MCAT Biology</h3>
    <p>Important Formulas</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Py4N44ZdkHVUy3ymI8b23jnDQUCt_qkepA&s" alt="Chemistry Book"/>
    <h3>MCAT Chemistry</h3>
    <p>Concepts & MCQs</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfSzwQEGHxKkaIdrYowJ-yf_ALWjgkwRXPw&s" alt="Practice Book"/>
    <h3>MCAT Practice Book</h3>
    <p>Past Papers</p>
    <button>View Book</button>
  </div>

</div><br /><br />
      
    </div>
  )
}
export default Coorses
