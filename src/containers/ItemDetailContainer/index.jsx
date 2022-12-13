import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";




import ItemDetail from "../../components/ItemDetail";



export function ItemDetailContainer() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {

        const getCharacterDetail = async () => {


            const docRef = doc(db, "products", id);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setMovie({ ...docSnap.data(), id: docSnap.id })
            } else {
                console.log("No such document!");
            }
        }

        getCharacterDetail()
    }, [id])


    return (


        <ItemDetail movie={movie} />


    )

}
