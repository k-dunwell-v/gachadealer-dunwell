import { CartContext } from '../context/CartContext'
import CheckoutForm from "./CheckoutForm";
import { useContext } from 'react';
import ItemInCart from "../ItemInCart"


const Checkout = () => {

    const { cart, priceCounter } = useContext(CartContext)

    return (

        <div className="flex flex-col w-full lg:flex-row h-full" data-theme="acid">

            <div className="grid flex-grow w-full">
                <CheckoutForm cart={cart} total={priceCounter()}/>
            </div>

            <div className="grid place-items-start m-10 pt-10">
                
                <ul role="list" className="-my-6 divide-y divide-gray-200 h-full  overflow-y-scroll pr-10 w-full" style={{maxHeight: 400 + "px"}}>

                    {cart.map(product => ItemInCart(product["item"].id, product["item"].img, product["item"].title, product["item"].price, product.quantity))}
                    
                </ul>

                <div className="border-t w-full border-gray-200 sm:px-6">

                    <div className="flex text-xl font-medium text-gray-900 mt-10">
                        <p>{"Subtotal: $" + priceCounter()}</p>
                    </div>

                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

                    <label for="submit-form" className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent hover:text-neutral">
                        Checkout
                    </label>

                </div>
            
            </div> 

        </div>

    )



}

export default Checkout