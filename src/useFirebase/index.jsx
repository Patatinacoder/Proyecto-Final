import { useState } from 'react'
import { useEffect } from 'react'
import { collection } from 'firebase/firestore'
import { query } from 'firebase/firestore'
import { getDocs, where } from 'firebase/firestore'
import { db } from '../firebase/config'



const useFirebase = (categoryId) => {

const [error, setError] = useState("")
const [data, setData] = useState([])


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
          console.log(doc.id, " => ", doc.data());
          productosFirebase.push({ ...doc.data(), id: doc.id })
        });
        setData(productosFirebase);
      } catch (error) {
        setError(error.message)
      } finally{
      };

    })();
  }, [categoryId]);




  return (
   [data,error]
  )
}

export default useFirebase