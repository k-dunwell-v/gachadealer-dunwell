import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import CheckoutItem from './CheckoutItem'
import CheckoutForm from "./CheckoutForm";
import { useContext } from 'react';


const Checkout = () => {

    const { cart } = useContext(CartContext)

    return (

        <div className="flex flex-col w-full lg:flex-row" data-theme="acid">

            <div className="grid place-items-center m-10">
                
                <ul role="list" classNameName="-my-6 divide-y divide-gray-200">

                    {cart.map(product => CheckoutItem(product["item"].id, product["item"].img, product["item"].title, product["item"].price, product.quantity))}

                </ul>
            
            </div> 

            <div className="divider lg:divider-horizontal"></div> 

            <div className="grid flex-grow w-full">

                <CheckoutForm></CheckoutForm>
                
            </div>

        </div>

    )



}

export default Checkout