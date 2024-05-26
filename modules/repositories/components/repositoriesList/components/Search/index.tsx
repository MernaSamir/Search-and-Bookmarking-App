import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function SearchField() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState(router.query.search || "");

    const handleSearch = (e: any) => {
      e.preventDefault();
  
      if(searchQuery){
      router.push(`/?search=${searchQuery}&page=1`);
      }
      else
      router.push(`/?page=1`);
  
    };
  
  return (
    <div className="searchContainer">
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for repositories"
      />
      <button type="submit">Search</button>
    </form>
  </div>  )
}
