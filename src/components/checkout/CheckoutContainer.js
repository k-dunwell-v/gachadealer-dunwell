import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import Checkout from './Checkout';


const CheckoutContainer = () => {

    const { cart } = useContext(CartContext)

    return (

        <>

            {cart.length === 0 ?

            <div className="bg-neutral" style={{height: 700 + "px"}} data-theme="acid">

                <div className="flex justify-center px-4 py-60 text-white text-2xl">
                
                    I'm feeling kinda lonely... {''}

                    <Link to="/categories"
                    type="button"
                    className="font-medium text-primary hover:text-accent">
                        Wanna add some stuff? <span aria-hidden="true"> :)</span>
                    </Link>

                </div>

            </div> : <Checkout/>}

        </>

    )



}

export default CheckoutContainer