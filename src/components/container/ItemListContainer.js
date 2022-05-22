import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemOfList from "./ItemOfList"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = (homeItem) => {
    
    let { category } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        const db = getFirestore()
        
        const productsCollection = category ? query(collection(db, "productos"), where("category", "==", category)) : collection(db, "productos")

        getDocs( productsCollection ).then( snapshot => {

            if (snapshot.size > 0) {

                const merchandise = snapshot.docs.map(docs => ({ "id": docs.id, ... docs.data()}))

                setProducts(merchandise) 

            }
        })


    })

    return (

        <>

            <ItemList className="main">
                {products.map ( merch => <ItemOfList key={merch.id} item={merch}/>)}
            </ItemList>

            {homeItem.children}

        </>


        
    )
}

export default ItemListContainer
