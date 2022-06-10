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

                setProduct({"id":result.id, ... result.data()})


            }else{
                setProduct({
                    "id":"000",
                    "img": "https://dummyimage.com/900x900/ebebeb/8c8c8c.jpg&text=(」°ロ°)」",
                    "title":"Huh?",
                    "brand":"Huh?!",
                    "details":"How did you get here?!	(・・;)ゞ",
                    "price":"free",
                    "stock":0

                })
            }

        })

    })

    return (

        <div>

            <ItemDetail 
                id={product.id} 
                img={product.img} 
                title={product.title} 
                brand={product.brand} 
                details={product.details} 
                price={product.price} 
                stock={product.stock}
            />

        </div>


        
    )
}


export default ItemDetailContainer
