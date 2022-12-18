import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userImg from '../../assets/user.png'
import './header.scss'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'

const Header = () => {
  const location = useLocation();
  
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(search))
	  setSearch('');
  }

  return (
    <div className='header'>
      <Link onClick={()=>{setSearch(''); dispatch(fetchAsyncMovies("Harry"))}} to="/">
        <div className="logo">Movie App</div>
      </Link>
      {location.pathname === '/' && <div className="search-bar">
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Search movies..' value={search} onChange={(e)=> setSearch(e.target.value)} />
          <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>}
      <div className="user-image">
        <img src={userImg} alt="user-avatar" />
      </div>
    </div>
  )
}

export default Header