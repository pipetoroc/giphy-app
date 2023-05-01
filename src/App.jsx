import { useEffect, useState } from 'react'
import './App.css'
import getGifs from './services/getGifs'

function App () {

  const [gifs, setGifs] = useState([])

  useEffect(()=>{
    getGifs().then(gifs => setGifs(gifs))
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
