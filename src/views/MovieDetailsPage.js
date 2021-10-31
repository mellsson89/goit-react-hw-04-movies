import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import {appMoveDetails} from "../services/app-api";

export default function MovieDetailsPage(props) {

    const [movieDetails,setMovieDetails]=useState('');

    useEffect(() => {
        const movieId=Number(props.match.params.movieId);
        (async () => {
            const data= await appMoveDetails(movieId);
            setMovieDetails(data)
        })()
    },[props.match.params.movieId])


    return (
        movieDetails && <MovieCard movieDetails={movieDetails}/>

    )
}
