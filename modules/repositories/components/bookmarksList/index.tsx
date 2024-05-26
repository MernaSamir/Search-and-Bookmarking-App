import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../repositoriesList';
import Style from './style';

export default function BookmarksList() {
     const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const renderBookmarks = () => {
    if (!isMounted) return null;

    const bookmarksString = getLocalStorage("bookmarks");
    const bookmarks = bookmarksString ? JSON.parse(bookmarksString) : [];
    return (
      <Style>
        {bookmarks.map((b: any, i: any) => (
          <p   key={i} style={{borderRight:i<bookmarks.length-1?'1px solid gray':''}}>{b.name}</p>
        ))}
      </Style>
    );
  };

  return (
    renderBookmarks()
  )
}
