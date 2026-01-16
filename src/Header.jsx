import React, { useState } from "react";


export default function Header({ handleSearch }) {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-box">M</span>
        <span>DISCOVER ▾</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title, author or keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
        />
        <button onClick={() => handleSearch(search)}>Search</button>
      </div>
    </header>
  );
}
