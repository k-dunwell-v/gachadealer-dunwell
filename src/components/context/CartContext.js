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
    inCart: [],
    swapShow: () => [],
    inCartHandler: () => [],
    addToCart: () => [],
    deleteFromCart: () => [],
    clearCart: () => {},

})


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(getLocal() || [])
    const [show, setShow] = useState(false)
    const [inCart, setInCart] = useState(0)


    /////////////////////////////////////////
    const swapShow = () => {
        setShow(currentState => !currentState)
    }
    /////////////////////////////////////////


    /////////////////////////////////////////
    const inCartHandler = () => {

        let total = 0

        cart.forEach((element) => {
            total = total + parseInt(element.quantity);
        });

        setInCart(total)

    }

    /////////////////////////////////////////


    ///////////////////////////////////////// 
    const addToCart = ( {item, quantity} ) => {

        const {id, img, title, price} = item
    
            if (quantity > 0) {

                const isInCart = cart.find(cartItem => cartItem.item["id"] === id)

                if (isInCart) {
        
                    const index = cart.findIndex((cartItem => cartItem.item["id"] === id))
        
                    setCart(currentCart => {
        
                        let oldQuantity = currentCart[index].quantity
                        let oldPrice = currentCart[index].item.price

                        currentCart[index].quantity = parseInt(oldQuantity) + parseInt(quantity)
                        currentCart[index].item.price = parseInt(oldPrice) + parseInt(price)
        
                        return currentCart.concat()
            
                    })
        
            }else{
        
                setCart(currentCart => {
    
                    currentCart.push({item:{id:id, img: img, title: title, price: price}, quantity:quantity})
            
                    return currentCart.concat()
        
                })
    
            }
    
            PushLocal(cart)

        }

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
        inCart,
        swapShow,
        inCartHandler,
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