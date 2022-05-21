import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { merch as merchandise } from "./merch"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer= () => {

    let { id } = useParams()

    const [merch, setMerch] = useState([])

    useEffect(() => {
        
        const getMerch = new Promise ( (resolve, reject) => {

            setTimeout(() => {
                resolve([merchandise.find(item => item.id === id)])
            }, 500)

        })

        getMerch.then( (result) => {
            setMerch(result)

        }).catch((e) => {
            console.error(e)
        })

    })

    return (

        <div>

            {merch.map ( merch => ItemDetail(merch.id, merch.img, merch.title, merch.description, merch.specifications, merch.details, merch.price, merch.stock))}

        </div>


        
    )
}


export default ItemDetailContainer
