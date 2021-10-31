import React from "react";
import style from './styles/movieCard.module.scss'
import {Link, Route, withRouter} from "react-router-dom";
import CastPage from "../components/CastPage/CastPage";
import ReviewsPage from "../components/ReviewsPage/ReviewsPage";
import routes from "../routes/routes";
import PropTypes from 'prop-types';

const MovieCard=({movieDetails,match,history,location}) => {

    const {id, title, release_date, poster_path, genres, overview, vote_average} = movieDetails;
    const date = `(${release_date.slice(0, 4)})`;
    const userScore = `${vote_average * 10}%`;
     const {url,path}=match;
    const img=`https://image.tmdb.org/t/p/w200/${poster_path}`;

   const handleGoBack=() => {

       if (location.state && location.state.from) {
           return history.push(location.state.from);
       }

       history.push(routes.movies)
   }

   const handle=()=> {
       if(location.state && location.state.from) {
           return location.state.from;
       }
   }

    return (

        <>
            <button type='button' onClick={handleGoBack}>Вернутся назад</button>

            <div className={style.movie_card}>
                <img src={img} alt={title}/>
                <div className={style.movie_card_content}>

                    <h2 className={style.movie_card_title}>{title} {date}</h2>
                    <p>User Score: {userScore}</p>
                    <p className={style.movie_card_overview}>Overview</p>
                    <p>{overview}</p>
                    <p className={style.movie_card_genres}>Genres</p>
                    {genres.map(({id, name}) => <p key={id} className={style.movie_card_genresList}>{name}</p>)}
                </div>

            </div>
            <div>
                <p>Additional information</p>
               <ul>
                   <li><Link to={{
                       pathname:`${url}/cast`,
                       state: {from:handle()}}}>Cast</Link></li>
                   <li><Link to={{pathname:`${url}/reviews`,
                       state: { from: handle()}}}>Reviews</Link></li>
               </ul>
                <Route path={`${path}/cast`} render={props => <CastPage {...props} id={id}/>}/>
                <Route path={`${path}/reviews`} render={props => <ReviewsPage {...props} id={id}/>}/>
            </div>
        </>
    )
}

MovieCard.propTypes ={
    movieDetails:PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        release_date:PropTypes.string.isRequired,
        poster_path:PropTypes.string.isRequired,
        genres:PropTypes.array.isRequired,
        overview:PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired
    }).isRequired
}
export default withRouter(MovieCard);