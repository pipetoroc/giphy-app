import TrendingGifs from '../../components/TrendingGifs/TrendingGifs'
import { useState } from 'react'

function Home () {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar
    console.log(keyword)
  }

  const hadleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>

      <h1 className='home__title'> The  Giphy App </h1>
        <form className='home__form' onSubmit={handleSubmit}>
          <input className='home__input' type="text" placeholder='Busca tu gif' value={keyword} onChange={hadleChange}/>
        </form>
        <TrendingGifs/>

    </>
  )
}

export default Home
