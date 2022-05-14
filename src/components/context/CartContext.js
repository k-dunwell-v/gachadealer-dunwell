import { Children, createContext, useEffect, useState } from "react";

function getLocal() {

    let localCart = localStorage.getItem("LocalCart")
    localCart = JSON.parse(localCart)

    return localCart
}



function PushLocal(cart) {
    localStorage.setItem("LocalCart", JSON.stringify(cart))
}


    

export const CartContext = createContext({

    cart: [],
    addToCart: () => [],
    deleteFromCart: () => [],
    clearCart: () => {}

})


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(getLocal())

    ///////////////////////////////////////// 
    const addToCart = ( id, title, price ) => {

        const isInCart = cart.find(cartItem => cartItem.item["id"] === id)

        if (isInCart) {

            const units = isInCart.quantity + 1

            const index = cart.findIndex((cartItem => cartItem.item["id"] === id))

            setCart(currentCart => {

                currentCart[index].quantity = units

                return currentCart.concat()
    
            })

        }else{

            setCart(currentCart => {

                currentCart.push({item:{id:id, title: title, price: price}, quantity:1})
          
                return currentCart.concat()
    
            })

        }

        PushLocal(cart)

    }
    /////////////////////////////////////////



    const context = {
        cart,
        addToCart
    }

    return (

        <CartContext.Provider value={ context }>
            {children}
        </CartContext.Provider>

    )

        


}

export default CartProvider