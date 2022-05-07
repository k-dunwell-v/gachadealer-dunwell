import { useParams } from "react-router-dom"
import Order from "./Order";
import Jp2Col from "./Jp2Col";
import Shipping from "./Shipping";

const Categories = () => {

    const { id } = useParams()
    
    let Cat;

    // traté de usar switch pero por alguna razón no funciona, no entiendo por qué
    if (id == 1){
        Cat = <Order/>
    }

    if (id == 2){
        Cat = <Jp2Col/>
    }

    if (id == 3){
        Cat = <Shipping/>
    }

    return (
    
        Cat
            
    )


}

export default Categories
