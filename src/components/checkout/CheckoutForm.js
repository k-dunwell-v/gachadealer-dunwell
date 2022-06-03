import { useContext } from 'react'
import {CartContext } from '../context/CartContext'


const CheckoutForm = () => {

    const { priceCounter } = useContext(CartContext)

    return(

        <div className="card w-full bg-neutral text-neutral-content rounded-none">

            <div className="card-body items-center text-center justify-start">

                <h2 className="card-title m-10 text-2xl">
                    
                    Subtotal:{' '}
                    <h2 className="font-bold">{"$" + priceCounter()}</h2>
                
                </h2>

                <hr className="divider m-1 p-1"></hr>
                
                <form action="#" method="POST" className="form-control">

                    <input type="text" placeholder="Name" className="input rounded-md"/>

                    <input type="text" placeholder="Surname" className="input rounded-md mt-4"/>

                    <input type="text" placeholder="Email address" className="input rounded-md mt-4"/>

                    <input type="text" placeholder="Confirm email address" className="input rounded-md mt-4"/>

                    <input type="text" placeholder="Country" className="input rounded-md mt-4"/>

                    <div className="card-actions mt-10">
                        <button type="submit" className="btn btn-primary btn-wide rounded-md">Place order</button>
                    </div>

                </form>

                

            </div>

        </div>


    )
}

export default CheckoutForm

            