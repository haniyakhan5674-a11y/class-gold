import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import About from './About';
import Coorses from './Coorses';


const slides = [
  {
    title: "FREE AND DISCOUNTED BESTSELLERS",
    text: "Join 150,000+ fellow readers. Get free and discounted bestsellers straight to your inbox.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    // link: "/books",
  },
  {
    title: "READ ANYTIME ANYWHERE",
    text: "Discover thousands of eBooks instantly.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    // link: "/books",
  },
  {
    title: "READ ANYTIME ANYWHERE",
    text: "Discover thousands of eBooks instantly.",
    image:
      "https://market-resized.envatousercontent.com/previews/files/158946355/theme-preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=658d8d455d4985670a7d23b71700239f7a3944051dc813aef36a3d55c72291b6",
    // link: "/books",
  },
];


 function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  return (
    <div className='box'>
      
        <div className="carousel">
      <div
        className="slide"
     style={{ backgroundImage: `url(${slides[index].image})` }}

      >
        <div className="overlay">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>
          <button onClick={() => navigate(slides[index].link)}>
            Explore Books
          </button>
        </div>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <button className="next" onClick={nextSlide}>›</button>
    </div>

   <br /><br />
    <center> <h4> ENGLISH NOVELS</h4></center><br />
   <div class="ecard-container">

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5xkKB1ByJI59VpGEBBkkFRN0_FJ9COkr2g&s"  alt="Physics Book"/>
    <h3>Pulitzer Price</h3>
    <p>By Hyper Lee</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg" alt="Math Book"/>
    <h3>Atomic Habit</h3>
    <p>Herry Potter</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLcCiXISIAS-xOyIsKMUaK2EVAq7_OUx6Lg&s" alt="Chemistry Book"/>
    <h3>Twisted Love</h3>
    <p>By Hana hong</p>
    <button>View Book</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg" alt="Practice Book"/>
    <h3>The Alchemist </h3>
    <p>By paulo</p>
    <button>View Book</button>
  </div>

</div><br /><br />

    <center>  <h4>URDU NOVELS </h4></center>
   <div class="ecard-container">

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbm17d0NSJPhaVnoiN7-H6q4YlgNOfipikZg&s" alt="Physics Book"/>
     <h3>آبِ حیات</h3>
        <p>مصنف: اشتیاق احمد</p>
        <button>تفصیل دیکھیں</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOg5rZHVErI3dzskaAYyheoHouGMSQVRBkg&s" alt="Math Book"/>
  <h3>من و سلویٰ</h3>
    <p>مصنف: عمیرہ احمد</p>
    <button>تفصیل</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eUHD2JE7D71V67CqeuG1K_hjCd4nklkqow&s" alt="Chemistry Book"/>
    <h3>دلربا</h3>
    <p>مصنف: محمد یونس</p>
    <button>تفصیل</button>
  </div>

  <div class="ecat-book-card">
    <img src="https://m.media-amazon.com/images/I/91koHMpHnOL._AC_UF1000,1000_QL80_.jpg" alt="Practice Book"/>
    <h3>راجہ گدھ</h3>
        <p>مصنف: بانو قدسیہ</p>
        <button>تفصیل دیکھیں</button>
  </div>

</div><br /><br />

 
    <br/><br/><br/>
   
    
<center><div class="end">
        <center><h3>Recommendation</h3>
        <center><input type="text" className="lab" placeholder="i read now..."/></center><br/><br/>
        <button class="emd">Search</button></center>
    </div><br /><br /><br /><br /></center>
< About/>
<Coorses/>

    </div>
  )
}
export default Home;