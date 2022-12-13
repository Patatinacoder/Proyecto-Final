import { Link } from "react-router-dom";
import "./movieCard.css"
export function MovieCard({ movie }) {


    return (


        <li className="movieCard">
            <Link to={`/detail/${movie.id}`}>

                <div >

                    <img
                        src={process.env.PUBLIC_URL + `${movie.poster}`}
                        alt='poster'
                    />
                </div>

                <div >{movie.name}</div>

            </Link>
        </li>
    );
}

export default MovieCard;