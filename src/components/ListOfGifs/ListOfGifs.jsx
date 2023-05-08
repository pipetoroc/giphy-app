import { useEffect, useState } from 'react'
import Gif from '../Gif/Gif'
import getGifs from '../../services/getGifs'

function ListOfGifs ({ params }) { //eslint-disable-line
  const { keyword } = params //eslint-disable-line
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
export default ListOfGifs
