import React, {useEffect, useState} from "react";
import FilmList from "../components/FilmList";
import queryString from 'query-string';
import {appMoviesPage} from "../services/app-api";
import {appMoviesPageHandle} from "../services/app-api";

export default function MoviesPage(props){

    const [query,setQuery]=useState('');
    const [searchFilms,setSearchFilms]=useState('');

    useEffect(() => {
               (async () => {
                   if(props.location.search) {
                       const queryParams = queryString.parse(props.location.search);
                       const search = queryParams.query;
                       const data = await appMoviesPage(search);
                       setSearchFilms(data);
                       setQuery(search)
                   }
               })()


    },[props.location.search])


    const handleChange =(e) => {
        setQuery(e.currentTarget.value);
    }

    const  handleClickButton =async () => {
        const data=await appMoviesPageHandle(query);
        setSearchFilms(data);

        props.history.push({
              pathname: props.location.pathname,
              search: `query=${query}`,
          });
    }

        return (
<>
    <input type='text' value={query} onChange={handleChange}/>
  <button type='button' onClick={handleClickButton}>Search</button>

    <FilmList  filmList={searchFilms}/>

        </>


        )
    }
