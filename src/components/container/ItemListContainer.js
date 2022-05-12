import { useEffect, useState } from "react";
import { merch as merchandise } from "./merch"
import { useParams } from "react-router-dom";
import ItemOfList from "./ItemOfList"
import ItemList from "./ItemList"
import Item from "./Item"


const ItemListContainer = () => {
    
    let { category } = useParams()

    const [merch, setMerch] = useState([])

    useEffect(() => {
        
        const getMerch = new Promise ( (resolve, reject) => {

            setTimeout(() => {
                resolve(category ? merchandise.filter(item => item.category === category) : merchandise)
            }, 500)

        })

        getMerch.then( (result) => {
            setMerch(result)

        }).catch((e) => {
            console.error(e)
        })

    })

    return (

        <div className="wrapper">

            <ItemList className="main">
                {merch.map ( merch => ItemOfList(merch.id, merch.img, merch.title, merch.price))}
            </ItemList>

            <div className="right">
                <Item/>
                <Item/>
                <Item/>
            </div>

        </div>


        
    )
}

export default ItemListContainer
