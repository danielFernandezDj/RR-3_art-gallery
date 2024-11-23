import React from "react";

function GalleryFrame(props) {
  return (
    <div style={{ 'width': '100%' }}>
      <img src={props.objectImg} alt={props.title} />
      <p>{props.artist} <span>{props.objectIdNumber}</span></p>
    </div>
  )
}


export default GalleryFrame