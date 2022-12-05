import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
export function MovieCard({ movie }) {
    return (
        <li className={styles.movieCard}>
            <Link to={`/detail/${movie.id}`}>

                <div>
                    
                    <img
                        src={process.env.PUBLIC_URL + `${movie.poster}`}
                        alt='poster'
                    />
                </div>

                <div>{movie.name}</div>
                <div>{movie.category}</div>

            </Link>
        </li>
    );
}

export default MovieCard;