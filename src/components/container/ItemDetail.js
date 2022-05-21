import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount"


const ItemDetail = (id, img, title, description, specifications, details, price, stock) => {

    const { swapShow, addToCart, isInCart, deleteFromCart } = useContext(CartContext)

    const { index, currentQuantity } = isInCart(id)

    function onAdd(quantity) {

        if (quantity > 0) {

            const updatedPrice = parseInt(price) * quantity
            addToCart({item:{id:id, img: img, title: title, price: updatedPrice}, quantity:quantity})

        }else{ index > -1 && deleteFromCart(id) }
        
        swapShow()
        
    }

    return (

        <div className="bg-white">

            <div className="pt-6">

                {/* <!-- Image gallery --> */}
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img src={img} className="w-full h-full object-center object-cover"/>
                    </div>

                    <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">

                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
                        </div>


                        {/* <!-- Options --> */}
                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <h2 className="sr-only">Product information</h2>
                            <hr></hr>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                            {/* <!-- Description and details --> */}
                            <div>

                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{description}</p>
                                </div>
                                </div>

                                <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Specifications</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">

                                    {specifications.map (specifications => <li className="text-gray-400"><span className="text-gray-600"> {specifications} </span></li>)}
                                    

                                    </ul>
                                </div>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">{details}</p>
                                    </div>
                                </div>

                                <ItemCount title={title} img={img} price={price} stock={stock} quantity={currentQuantity} onAdd={onAdd}/>

                            </div>


                        </div>
    
                    </div>

                </div>

            </div>

        </div>


    )
}


export default ItemDetail