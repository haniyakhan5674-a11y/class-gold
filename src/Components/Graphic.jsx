import React from 'react'

export default function Graphic() {
  return (
    <div>
       <div className="board-wrapper">

      {/* Text Section */}
      <div className="board-text">
        <center><h2>Federal Board</h2></center>
        <p>
          Federal Board (FBISE) Pakistan ka aik trusted board hai jo
          concept-based learning aur fair examination system provide karta hai.
        </p>

        <p>
          Federal Board ki books updated syllabus ke mutabiq hoti hain
          aur students ke liye bohat helpful hoti hain.
        </p>

        <button>View Federal Books</button>
      </div>

      {/* Image Section */}
      <div className="board-img">
        <img
          src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
          alt="Punjab Board Books"
        />
      </div>

    </div>
    </div>
  )
}
