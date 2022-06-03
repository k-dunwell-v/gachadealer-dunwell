import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const CheckoutItem = (id, img, title, price, quantity) => {

    const { deleteFromCart } = useContext(CartContext)

    return (

        <div class="card card-side bg-base-100 rounded-none">

            <figure className="w-1/6">
                <img src={img}/>
            </figure>
           
            <div class="card-body">

                <div class="flex flex-col w-full lg:flex-row justify-between" data-theme="acid">

                    <div class="grid">
                        <h1 class="card-title">{title}</h1>
                    </div>

                    <div class="grid">
                        <h2 class="card-title">{"$" + price}</h2>
                    </div>
                    
                </div>

                <p className="text-gray-500">{"Qty " + quantity}</p>

                <div class="card-actions justify-end">
                    <button class="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => deleteFromCart(id, img, title)}>Remove</button>
                </div>

            </div>

        </div>

    )}


export default CheckoutItem