import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"

const apiKey = "7b1639b361a6c27c3fb05b55cb8f3867"
const url = "https://api.themoviedb.org/3/movie"
const img = "https://image.tmdb.org/t/p/w500"
const popular = "popular"
const top_rated = "top_rated"
const now_playing = "now_playing"
const upcoming = "upcoming"


const Card = ({ img }) => (
    <img className='card' src={img} alt="cover" />
)


const Row = ({ title, arr = [] }) => {
    return (
        <>
            <div className="row">
                <h2>{title}</h2>
                <div>
                    {arr.map((item, index) => (

                        <Card key={index} img={`${img}/${item.poster_path}`} />
                    ))}



                </div>
            </div>
        </>
    )
}

const Home = () => {

    const [popularMovies, setpopularMovies] = useState([])
    const [topRated, settopRated] = useState([])
    const [nowPlaying, setnowPlaying] = useState([])
    const [upComing, setupComing] = useState([])

    useEffect(() => {
        const fetchPopular = async () => {
            const { data: { results } } = await axios.get(`${url}/${popular}?api_key=${apiKey}&page=2`)
            setpopularMovies(results)
        }
        fetchPopular()

        const fetchTopRated = async () => {
            const { data: { results } } = await axios.get(`${url}/${top_rated}?api_key=${apiKey}`)
            settopRated(results)
        }
        fetchTopRated()

        const fetchNowPlaying = async () => {
            const { data: { results } } = await axios.get(`${url}/${now_playing}?api_key=${apiKey}`)
            setnowPlaying(results)
        }
        fetchNowPlaying()

        const fetchupComing = async () => {
            const { data: { results } } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}&page=3`)
            setupComing(results)
        }
        fetchupComing()

    }, [])


    return (
        <section className='home'>
            <div className="banner" style={{
                backgroundImage: popularMovies[4] ? `url(${`${img}/${popularMovies[4].poster_path}`})` : "rgb(12, 12, 12)"
            }}>
                {popularMovies[4] && <h1>{popularMovies[4].original_title}</h1>}
                {popularMovies[4] && <p>{popularMovies[4].overview}</p>}

                <div>

                    <button> <FaPlay /> Play</button>
                    <button><AiOutlineInfoCircle /> More Info</button>
                </div>



            </div>
            <Row title={"Top 10 Movies In India Today"} arr={popularMovies} />
            <Row title={"Continue Watching"} arr={topRated} />
            <Row title={"TV Shows"} arr={nowPlaying} />
            <Row title={"Trending Now"} arr={upComing} />

        </section>
    )
}

export default Home
