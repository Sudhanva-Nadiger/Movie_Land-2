
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayOut from './components/SharedLayOut'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetails/MovieDetails'
import ErrorPage from './components/MovieNotFound/MovieNotFound'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
	  <Routes>
		<Route path='/' element={ <SharedLayOut /> } >
			<Route index path='/' element={<Home />} />
			<Route  path='*' element={< ErrorPage />} />
			<Route  path='/movie/:imdbID' element={<MovieDetail />} />
		</Route>
	  </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
