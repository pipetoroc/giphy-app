import { useEffect, useState } from 'react'
import './App.css'

function App () {

  const [gifs, setGifs] = useState([])

  const  API_URL = 'https://api.giphy.com/v1/gifs/trending?api_key=pJqYviFUDNfFcku0l5QR8kqFgRDjny45&limit=25&rating=g'
  const API_KEY = 'pJqYviFUDNfFcku0l5QR8kqFgRDjny45'


  useEffect(()=>{
    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        const { data } = response
        console.log(data)
        const gifs = data.map(image => image.images.downsized_medium.url)
        console.log(gifs)
        setGifs(gifs)
      })
  }, [])

  return (
    <>
      <h1> Giphy App </h1>
      {
        gifs.map((singleGif)=>
          <img src={singleGif} ></img>
        )
      }
        
    </>
  )
}

export default App
