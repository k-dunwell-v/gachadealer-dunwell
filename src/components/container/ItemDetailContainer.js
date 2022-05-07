import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { merch as merchandise } from "./merch"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer= () => {

    let { id } = useParams()

    id = id - 1

    const [merch, setMerch] = useState([])

    useEffect(() => {
        
        const getMerch = new Promise ( (resolve, reject) => {

            setTimeout(() => {
                resolve([merchandise[id]])
            }, 2000)

        })

        getMerch.then( (result) => {
            setMerch(result)

        }).catch((e) => {
            console.error(e)
        })

    })

    return (

        <div>

            {merch.map ( merch => ItemDetail(merch.img, merch.title, merch.description, merch.specifications, merch.details, merch.price))}

        </div>


        
    )
}


export default ItemDetailContainer
