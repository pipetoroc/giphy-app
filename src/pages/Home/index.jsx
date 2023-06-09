import { Link, useLocation } from 'wouter'
import TrendingGifs from '../../components/TrendingGifs/TrendingGifs'
import { useState } from 'react'

function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const hadleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>

        <form className='home__form' onSubmit={handleSubmit}>
          <input className='home__input' type="text" placeholder='Busca tu gif' value={keyword} onChange={hadleChange}/>
          <button className='home__button'> search! </button>
        </form>
        <TrendingGifs/>

    </>
  )
}

export default Home
