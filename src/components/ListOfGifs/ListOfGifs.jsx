import { useEffect, useState } from 'react'
import Gif from '../Gif/Gif'
import getGifs from '../../services/getGifs'

function ListOfGifs ({ keyword }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

  return gifs.map(({ id, title, url }) =>
    <Gif
      id={id}
      key={id}
      title={title}
      url={url}
    />)
}

export default ListOfGifs
