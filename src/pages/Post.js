import React from 'react'
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom";
// import posts from '../postData'
import './Post.css'

function Post({ movies }){
    const params = useParams();
    let [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive ? {color: 'orangered'} : {})

    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({ filter })
        }else{
            setSearchParams({})
        }
    }
    const QueryNavLink = ({ to, children, ...props }) => {
        const location = useLocation();
        // console.log(location)
        return <NavLink to={to + location.search} {...props}>{children}</NavLink>
    }
    // 필터링된 목록으로 렌더링하기
    const moviesFiltered = movies
    .filter( movie => {
        const filter = searchParams.get('filter')
        if(!filter) return true;
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })
    const movie = moviesFiltered[params.movieId]
    return (
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br/><input className="filter-post" value={searchParams.get('filter') || ""} onChange={changeQueryString} placeholder="Search post ..."/>

            {/* 특정 블로그 포스트 */}
            {movie ? 
                <div className="post-container">
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image} alt={movie.title}/>
                    <p>{movie.summary}</p>
                    <h3>{movie.genres.join(" ")}</h3>
                </div>   :
                <h1>MOVIE PAGE</h1>}

            {/* 블로그 포스트 전체목록  */}
            {moviesFiltered
            .map( (movie, id) => {
                return (
                    <QueryNavLink key={id} to={`/movies/${id}`} className="post-item" style={applyActiveColor}>{movie.title}</QueryNavLink>
                )
            })}
        </>
    )
}
export default Post