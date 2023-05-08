import { useEffect, useState } from 'react'
import Gif from '../Gif/Gif'
import trendingGifs from '../../services/trendingGifs'
import './TrendngGifs.css'

function TrendingGifs () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    trendingGifs().then(gifs => {
      setGifs(gifs)
    })
  }, [])

  return <div className='ListOfGifs'>
    {
      gifs.map(({ id, title, url }) =>
      <Gif
      id={id}
      key={id}
      title={title}
      url={url}
      />)
    }
  </div>
}

export default TrendingGifs
