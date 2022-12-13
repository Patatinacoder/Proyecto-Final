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
    console.log(evento);
    setAdView(false);
  };
  useEffect(() => {
    setAdView(true);
  }, []);

  useEffect(() => {
    const handleEsc = (evento) => {
      console.log(evento);

      if (evento.keyCode === 27) {
        console.log("will close")
        setAdView(false)
        window.removeEventListener("keydown", handleEsc)

      }
    }
    window.addEventListener("keydown", handleEsc)

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

  )}
  export default MoviesGrid