import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/Item";
import products from "../../data/products";
import styles from "./MoviesGrid.module.css";
import Ad from "../../components/Ad/index"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const { categoryId } = useParams();
  
  const [adView, setAdView] = useState(true);

  const handleClose = (evento) => {
      console.log(evento);
      setAdView(false);
  };
  useEffect(() => {
      setAdView(true);
  }, []);


  

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(products);
    });
    if (!categoryId) promesa.then((data) => setMovies(data));
    else {
      promesa.then((data) =>
        setMovies(data.filter((product) => product.category === categoryId))
      );
    }
  }, [categoryId]);



  useEffect(() => {
const handleEsc =  (evento)=>{
  console.log(evento);
  
  if (evento.keyCode === 27){
    console.log("will close")
    setAdView(false)
    window.removeEventListener("keydown", handleEsc)

  }
}

//documentación Firestore
const q = query(collection(db, "products"))

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});





window.addEventListener("keydown", handleEsc)

return ()=>{
  console.log("Desmontamos");
}

  })


  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      


      

      {adView ?( <Ad>
        <h1>Este es un anuncio molesto</h1> 
        <button onClick={handleClose}> cerrar anuncio</button></Ad>)
        : null}

    </ul>

   
  );
}

export default MoviesGrid;