import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/Item";
import styles from "./MoviesGrid.module.css";
import Ad from "../../components/Ad/index"
import useFirebase from "../../useFirebase";


export  function MoviesGrid() {
  const {categoryId} = useParams();
  const [adView, setAdView] = useState(true);
  const [data] = useFirebase(categoryId)

  const handleClose = (evento) => {
    setAdView(false);
  };
  useEffect(() => {
    setAdView(true);
  }, []);

 

  return (
    <ul className={styles.moviesGrid}>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      {adView ? (<Ad>
        <h1 className={styles.welcome}>Welcome To MuvYcenter</h1>
        <button className={styles.button} onClick={handleClose}>Close</button></Ad>)
        : null}

    </ul>


  );
}

  export default MoviesGrid