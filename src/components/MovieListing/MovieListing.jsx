import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { selectAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../Moviecard/MovieCard'
import './movieListing.scss'

const MovieListing = () => {
  const movies = useSelector(selectAllMovies)

  if(typeof(movies) === undefined){
	return( <p className="">
		No movies found
	</p>)
  }
  
  if(movies?.length === 0){
	return <p style={{color:"white", textAlign:"center"}}>Loading...</p>
  }

  const renderedMovies = movies?.map((movie)=>{
	return <MovieCard key={nanoid()} data={movie}/>
  })

  if(Boolean(renderedMovies) === false){
	return <p style={{color:"white", textAlign:"center", marginTop:"10%"}}>No such movies or shows found</p>
  }

  return (
    <div className='movie-wrapper'>
		<div className="movie-list">
			<h2>Movies/Shows</h2>
			<div className="movie-container">
				{
					renderedMovies
				}
			</div>
		</div>
    </div>
  )
}

export default MovieListing