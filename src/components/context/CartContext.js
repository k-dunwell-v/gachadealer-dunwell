import { Children, createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export function getLocal() {

    let localCart = localStorage.getItem("LocalCart")
    localCart = JSON.parse(localCart)

    return localCart
}


export function PushLocal(cart) {
    localStorage.setItem("LocalCart", JSON.stringify(cart))
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


export const CartViewContext = createContext(false)


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


export const CartContext = createContext({

    cart: [],
    show: [],
    swapShow: () => [],
    addToCart: () => [],
    deleteFromCart: () => [],
    clearCart: () => {},

})


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(getLocal() || [])
    const [show, setShow] = useState(false)

    /////////////////////////////////////////
    const swapShow = () => {
        setShow(currentState => !currentState)
    }
    /////////////////////////////////////////


    ///////////////////////////////////////// 
    const addToCart = ( {item, quantity} ) => {

        const {id, img, title, price} = item

        Swal.fire({
            title: 'Adding ' + title + ' to cart...',
            imageUrl: img,
            imageWidth: '200px',
            imageHeight: '200px',
            input: 'number',
            inputValue: 1,
            inputPlaceholder: 'Select quantity',
            confirmButtonText: "Add to cart",
            showCancelButton: true,
    
            inputValidator: (quantity) => {
    
                return new Promise((resolve) => {
    
                    if (quantity > 0) {

                        const isInCart = cart.find(cartItem => cartItem.item["id"] === id)

                        if (isInCart) {
                
                            const index = cart.findIndex((cartItem => cartItem.item["id"] === id))
                
                            setCart(currentCart => {
                
                                let oldQuantity = currentCart[index].quantity

                                currentCart[index].quantity = parseInt(oldQuantity) + parseInt(quantity)
                
                                return currentCart.concat()
                    
                            })
                
                        }else{
                
                            setCart(currentCart => {
                
                                currentCart.push({item:{id:id, img: img, title: title, price: price}, quantity:quantity})
                        
                                return currentCart.concat()
                    
                            })
                
                        }
                
                        PushLocal(cart)
                        swapShow()
                        resolve()
                        
    
    
                    } else {
                        resolve('You need to add more than that :)')
                        
                    }
                })
            }
        })





    }
    /////////////////////////////////////////


    /////////////////////////////////////////
    const deleteFromCart = ( id ) => {

        const index = cart.findIndex((cartItem => cartItem.item["id"] === id))

        setCart(currentCart => {
            currentCart.splice(index, 1)
            return currentCart.concat()

        })

        PushLocal(cart)


    }
    /////////////////////////////////////////


    /////////////////////////////////////////
    const clearCart = ( ) => {
        setCart([])
        PushLocal(cart)


    }
    /////////////////////////////////////////


    const context = {
        cart,
        show,
        swapShow,
        addToCart,
        deleteFromCart,
        clearCart

    }

    return (

        <CartContext.Provider value={ context }>
            {children}
        </CartContext.Provider>

    )

        


}

export default CartProvider