import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './info';

export default function POD () {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=lNfs5CzchlDNl6ITgBPh0L0IRqX6xqAwgD4xEOyK`)
    .then(response => {
      // console.log(response.data);
      setImage(response.data);
    })
    .catch(error => {
      console.log('Error - not this time my friend', error);
    })
  }, []);

  return (
    <div>
      <h1>NASA Photo of the Day</h1>
      <img src={image.hdurl} alt='NASA Pic of the Day' />
      <Info 
        title={image.title}
        date={image.date}
        explanation={image.explanation}
        copyright={image.copyright}
        url={image.url}
      />
    </div>
  )
}