import React from 'react'



export default function Webdevelop() {
  const bookData = {
    image: "https://example.com/premedical-book.jpg",
    title: "Premedical Federal Board Book – Biology",
    description:
      "Complete study book for Federal Board premedical – includes MCQs & chapter summaries.",
    downloadUrl: "https://example.com/download/premedical-biology.pdf",
  };
  const BookCard = ({ book }) => {

  return (
    <div>
      
       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <BookCard book={bookData} />
    </div>
  
<div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={book.image}
        alt={book.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{book.description}</p>
      </div>
      <div className="p-4">
        <a
          href={book.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Download Book
        </a>
      </div>
    </div>


    </div>
  )
}
}
