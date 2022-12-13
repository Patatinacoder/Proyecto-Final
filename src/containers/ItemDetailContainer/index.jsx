import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";




import ItemDetail from "../../components/ItemDetail";



export function ItemDetailContainer() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const getCharacterDetail = async () => {


            const docRef = doc(db, "products", id);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setMovie({ ...docSnap.data(), id: docSnap.id })
            } else {
            }
        }

        getCharacterDetail()
    }, [id])


    return (


        <ItemDetail movie={movie} />


    )

}
