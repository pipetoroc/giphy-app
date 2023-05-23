import './App.css'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import { Link, Route } from 'wouter'

function App () {
  return (
    <>
      <section className='app'>
          <h1 className='home__title'> The  Giphy App </h1>
        <Link to='/'>
          <div className="home__logo" src='/' />
        </Link>

        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path='/search/:keyword'
        />
        <Route
          component={Detail}
          path='/gif/:id'
        />
      </section>
    </>
  )
}

export default App
