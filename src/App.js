import React from 'react';
import { useState, useEffect } from "react";
import './App.css';

// Import components
import GalleryFrame from './Gallery-Frame';
import ButtonsBar from './Buttons-bar';

function App() {
  let [artId, setArtId] = useState(12730)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <GalleryFrame objectImg={data.primaryImageSmall} objectIdNumber={data.objectID} artist={data.artistDisplayName} title={data.title} />
      <ButtonsBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
