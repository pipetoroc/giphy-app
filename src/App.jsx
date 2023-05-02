import './App.css'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import { Link, Route } from 'wouter'

function App () {
  return (
    <>
      <h1> Giphy App </h1>

      <section className='app'>
        <Route
          path='/gif/:keyword'
          component={ListOfGifs}
        />
      </section>
    </>
  )
}

export default App
