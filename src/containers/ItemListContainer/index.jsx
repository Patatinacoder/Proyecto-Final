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
    (async () => {
        try {
            console.log(categoryId); 
  let q;
  if (categoryId) {
      q = query(collection(db, "products"), where("category", "==", categoryId))
  } else {
      q = query(collection(db, "products"));
  }

  const querySnapshot = await getDocs(q);
  const productosFirebase = [];
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      productosFirebase.push({...doc.data(), id: doc.id})
  });
  setMovies(productosFirebase);
} catch (error) {
  console.log(error);



}
})();
}, [categoryId]);

console.log(products);



  useEffect(() => {
const handleEsc =  (evento)=>{
  console.log(evento);
  
  if (evento.keyCode === 27){
    console.log("will close")
    setAdView(false)
    window.removeEventListener("keydown", handleEsc)

  }
}





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
        <h1 className={styles.welcome}>Welcome To MuvYcenter</h1> 
        <button className= {styles.button} onClick={handleClose}>Close</button></Ad>)
        : null}

    </ul>

   
  );
}

export default MoviesGrid;