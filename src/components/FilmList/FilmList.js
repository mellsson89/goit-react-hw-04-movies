import React from "react";
import {NavLink,withRouter} from "react-router-dom";

const FilmList =({filmList,location}) => {
    return (
<ul>
    {filmList && filmList.map(({id,title})=> (
        <li key={id}><NavLink  to={{
            pathname:`movies/${id}`,
            state: {
                from:location}
        }}>{title}</NavLink></li>
    ))}
</ul>
    )
}


export default withRouter(FilmList);