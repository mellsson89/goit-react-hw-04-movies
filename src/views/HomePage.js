import React, {useEffect, useState} from "react";
import FilmList from "../components/FilmList";
import {appHomePage} from "../services/app-api";
import PropTypes from 'prop-types';

export default function HomePage(){

const [films,setFilms]=useState([]);

useEffect( () => {
    (async () => {
     const data= await appHomePage();
     setFilms(data);
    })()
},[])

        return (
            <div>
                <h2>Trending today</h2>
<FilmList  filmList={films}/>
            </div>
        );
    }


HomePage.propType ={
    films:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired
    })).isRequired
}