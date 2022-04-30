import { useEffect, useState } from "react";
import { merch as merchandise } from "./merch"
import ItemOfList from "./ItemOfList"
import ItemList from "./ItemList"
import Item from "./Item"

const ItemListContainer = () => {

    const [merch, setMerch] = useState([])

    useEffect(() => {
        
        const getMerch = new Promise ( (resolve, reject) => {

            setTimeout(() => {
                resolve(merchandise)
            }, 1000)

        })

        getMerch.then( (result) => {
            setMerch(result)
            console.log(result)
        }).catch((e) => {
            console.error(e)
        })

    })

    return (

        <div className="grid">

            <ItemList className="left">
                {merch.map ( merch => ItemOfList(merch.id, merch.img, merch.title, merch.price))}
            </ItemList>

            <Item/>

        </div>


        
    )
}

export default ItemListContainer
