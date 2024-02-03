import { React, useState } from 'react';
import BookTile from './BookTile.jsx';
import GVDCover from '../../docs/GVDCover.jpg';
import BlinkingCover from '../../docs/BlinkingCover.jpg'
import BobbyCover from '../../docs/BobbyAndShiloh.jpg'

const BookListTest = () => {

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const handleImageLoad = () => {
    setImageLoaded(true)
  }
  let img = (
    <img
    className="book-thumbnail"
    height={200}
    width={'auto'}
    src={BlinkingCover}>
    onLoad={() => setImagesLoaded}

    </img>
  )

  return (
    {imagesLoaded &&

    <div className="book-tile">
      <div className="book-card">
        <img className="book-thumbnail" height={200} width={'auto'} src={cover}></img>
        <div className="book-info">
          <h4 className="book-title" onClick={(e) => handleClick(path)}>{title}</h4>
          <div className="book-summary">{summary}</div>
        </div>
      </div>
    </div>
    }
  )

  }

export default BookListTest;