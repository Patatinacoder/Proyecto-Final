import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import generateOrder from "./generateOrder";
export const saveOrder = async (nombreComprador, telefono, email, products, total) => {
    try {
        const generatedOrder = generateOrder(
            nombreComprador,
            email,
            telefono,
            products,
            total
        );

        const productOutOfStock = [];
        const productsInFirebase = [];
        for (const productInCart of products) {
            const docRef = doc(db, "products", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (productInCart.quantity > productInFirebase.quantity)
                productOutOfStock.push(productInCart);
        }


        if (productOutOfStock.length === 0) {


            for (const productInCart of products) {
                const productInFirebase = productsInFirebase.find(
                    (product) => product.id === productInCart.id
                );
                const productRef = doc(
                    db,
                    "products",
                    productInCart.id
                );

                await updateDoc(productRef, {
                    quantity:
                        productInFirebase.stock -
                        productInCart.quantity,
                });
            }

            //Generar la orden
            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );
            alert(
                `Order generated! Id: ${docRef.id}`
            );
        } else {
            let mensaje = "";
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );
                mensaje += `${product.name}, Stock: ${productInFirebase.stock}, Requested quantity: ${product.quantity}\n`;
            }
            alert(`Product/s out of stock: \n${mensaje}`);
        }
    } catch (error) {
    }
}