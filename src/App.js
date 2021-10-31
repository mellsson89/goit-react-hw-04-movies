import React, {lazy,Suspense} from "react";
import {Route,NavLink,Switch} from "react-router-dom";
import style from './styles/menu.module.scss'
import routes from "./routes/routes";

const HomePage=lazy(()=> import("./views/HomePage"));
const MoviesPage=lazy(()=> import("./views/MoviesPage"));
const MovieDetailsPage=lazy(()=> import("./views/MovieDetailsPage"));


const App=() => (
    <>
        <ul className={style.menu}>
            <li className={style.menu_item}>
                <NavLink exact className={style.menu_itemLink} activeClassName={style.menu_itemLink_active} to='/'>Home</NavLink>
            </li>
            <li><NavLink className={style.menu_itemLink} activeClassName={style.menu_itemLink_active} to='/movies'>Movies</NavLink></li>
        </ul>
        <Suspense fallback={<h1>Загрузка...</h1>}>
<Switch>
    <Route exact path={routes.home} component={HomePage}/>
    <Route exact path ={routes.movies} component={MoviesPage}/>
    <Route path={routes.moviesDetail} render={props => <MovieDetailsPage {...props} />} />
    <Route component={HomePage}/>
</Switch>
        </Suspense>
    </>
)

export default App;
