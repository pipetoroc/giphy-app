import { useEffect, useState } from 'react'
import './App.css'
import getGifs from './services/getGifs'
import Gif from './components/Gif'

function App () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'rick' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <>
      <h1> Giphy App </h1>

    <section className='app'>
      {
        gifs.map(({ id, title, url }) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
          />)
      }

    </section>
      </>
  )
}

export default App
