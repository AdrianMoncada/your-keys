import React from 'react'
import Gallery from '../heroGallery/Gallery';

const GridGallery = ({carInfo}) => {
  return (
    <div>
        <Gallery car={carInfo} />
    </div>
  )
}

export default GridGallery