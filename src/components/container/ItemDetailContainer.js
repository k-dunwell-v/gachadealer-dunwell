import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer= () => {

    let { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        
        const db = getFirestore()
        const products = doc( db, "productos", id )

        getDoc( products ).then( result => {

            if (result.exists()) {

                setProduct([{"id":result.id, ... result.data()}])

            }

        })

    })

    return (

        <div>

            {product.map ( merch => ItemDetail(merch.id, merch.img, merch.title, merch.brand, merch.details, merch.price, merch.stock))}

        </div>


        
    )
}


export default ItemDetailContainer
