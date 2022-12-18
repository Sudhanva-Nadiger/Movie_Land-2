import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieDetail, selectSelectedMovie , removeSelectedMovie} from '../../features/movies/movieSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp, faFilm, faCalendar } from '@fortawesome/free-solid-svg-icons'
import './movieDetails.scss'

const MovieDetails = () => {
	const id = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAsyncMovieDetail(id.imdbID))
		return () => {
			dispatch(removeSelectedMovie())
		}
	}, [dispatch, id])

	const data = useSelector(selectSelectedMovie)

	if(Object.keys(data).length === 0){
		return <p style={{color: "white", textAlign:"center"}}>Loading...</p>
	}

	return (
		<div className='movie-section'>
			<div className="section-left">
				<div className="movie-title">
					{data.Title}
				</div>
				<div className="movie-rating">
					<span>
						IMDB Rating <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> :
						{data.imdbRating}
					</span>
					<span>
						IMDB Votes <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#fafafa" }} /> :
						{data.imdbVotes}
					</span>
					<span>
						RunTime <FontAwesomeIcon icon={faFilm} style={{ color: "rgb(191, 213, 214)" }} /> :
						{data.Runtime}
					</span>
					<span>
						Year <FontAwesomeIcon icon={faCalendar} style={{ color: "peachpuff" }} /> :
						{data.Year}
					</span>
				</div>
				<div className="movie-plot">
					{data.Plot}
				</div>
				<div className="movie-info">
					<div className="">
						<span>Director </span>
						<span>{data.Director}</span>
					</div>
					<div className="">
						<span>Actors </span>
						<span>{data.Actors}</span>
					</div>
					<div className="">
						<span>Genres </span>
						<span>{data.Genre}</span>
					</div>
					<div className="">
						<span>Awards </span><span>{ data.Awards}</span>
					</div>
				</div>
			</div>
			<div className="section-right">
				<img src={data.Poster} alt={data.Title} />
			</div>
		</div>
	)
}

export default MovieDetails