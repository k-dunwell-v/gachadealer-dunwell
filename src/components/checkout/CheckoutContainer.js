import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import Checkout from './Checkout';


const CheckoutContainer = () => {

    const { cart } = useContext(CartContext)

    return (

        <>

            {cart.length === 0 ?

            <div classNameName="mt-6 flex justify-center text-center text-lg text-gray-500">
                <p>
                    I'm feeling kinda lonely... {' '}
                    <Link to="/categories"
                    type="button"
                    classNameName="font-medium text-indigo-600 hover:text-indigo-500">
                        Wanna add some stuff? <span aria-hidden="true"> :)</span>
                    </Link>
                </p>
            </div> : <Checkout/>}

        </>

    )



}

export default CheckoutContainer