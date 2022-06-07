import { CartContext } from '../context/CartContext'
import CheckoutForm from "./CheckoutForm";
import { useContext } from 'react';
import ItemInCart from "../ItemInCart"
import { Link } from 'react-router-dom';


const Checkout = () => {

    const { cart, priceCounter } = useContext(CartContext)

    return (

        <div className="flex flex-col w-full lg:flex-row h-full" data-theme="acid">

            <div className="grid flex-grow w-full">
                <CheckoutForm/>
            </div>

            <div className="divider lg:divider-horizontal"></div> 

            <div className="grid place-items-start mt-10">
                
                <ul role="list" className="-my-6 divide-y divide-gray-200 flex h-full flex-col overflow-y-scroll pr-10">

                    {cart.map(product => ItemInCart(product["item"].id, product["item"].img, product["item"].title, product["item"].price, product.quantity))}
                    
                </ul>

                
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">

                    <div className="flex text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{"$" + priceCounter()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <Link
                        to="/cart/"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        
                        >
                        Checkout
                        </Link>
                    </div>

                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                        or{' '}
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            
                        >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                        </p>
                    </div>

                    </div>
            
            </div> 

        </div>

    )



}

export default Checkout