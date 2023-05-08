import TrendingGifs from '../../components/TrendingGifs/TrendingGifs'

function Home () {
  return (
    <>

      <h1 className='home__title'> The  Giphy App </h1>
        <form className='home__form'>
          <input className='home__input' type="text" placeholder='Busca tu gif'/>
        </form>
        <TrendingGifs/>

    </>
  )
}

export default Home
