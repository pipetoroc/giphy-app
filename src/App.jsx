import './App.css'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'

function App () {
  return (
    <>
      <h1> Giphy App </h1>

      <section className='app'>
        <ListOfGifs keyword='Colombia' />
      </section>
    </>
  )
}

export default App
