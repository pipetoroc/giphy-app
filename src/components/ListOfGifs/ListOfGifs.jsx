import { useEffect, useState } from 'react'
import Gif from '../Gif/Gif'
import getGifs from '../../services/getGifs'

function ListOfGifs ({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <span> Cargando </span>

  return gifs.map(({ id, title, url }) =>
    <Gif
      id={id}
      key={id}
      title={title}
      url={url}
    />)
}

export default ListOfGifs
