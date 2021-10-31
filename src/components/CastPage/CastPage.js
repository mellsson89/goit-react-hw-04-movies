import React, {useEffect, useState} from "react";
import style from './styles/castPage.module.scss'
import {appCastPage} from "../../services/app-api";
import PropTypes from 'prop-types';

export default function CastPage({id}) {

    const [cast,setCast] = useState([]);

    useEffect(() => {
        (async () => {
            const data=await appCastPage(id);
            setCast(data);
        })()
    },[id])

        return (
            <ul className={style.cast_page}>
                {cast && cast.map(({profile_path, name, character,id}) => {
                    const img=`https://image.tmdb.org/t/p/w200/${profile_path}`;
                    return (
                        <li key={id}>
                            <img src={img} alt={name}
                                 className={style.cast_pageImg}/>
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                )}

                )}
            </ul>
        )
    }

CastPage.propTypes ={
    cast:PropTypes.arrayOf(PropTypes.shape({
        profile_path:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        character:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    }))
}
