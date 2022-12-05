import products from "../../data/products";
import { useEffect, useState } from "react";
 import {  useParams } from "react-router-dom";



import ItemDetail from "../../components/ItemDetail";



          export function ItemDetailContainer() {
            const [movie, setMovie] = useState({});
            const { id } = useParams();
        console.log(id);
            useEffect(() => {
                const promesa = new Promise((resolve, reject) => {
                    resolve(products);
                });
                promesa
                
                .then((result)=>{setMovie(result.find(movie=> movie.id === parseInt(id) ))})
                .catch((error)=>{console.log('Error');})
            },[id]);
            return (
               

                <ItemDetail movie={movie}/>

              
            )
            
            }
