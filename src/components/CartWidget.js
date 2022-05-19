import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const CartWidget = () => {

    const {swapShow, inCart, inCartHandler} = useContext(CartContext)

    inCartHandler()

    return (

        <>
            {inCart > 0 && 

                <div className="indicator"> 

                    <span className="indicator-item badge badge-secondary" data-theme="acid">{inCart}</span>

                    <button onClick={() => swapShow()}>
                        <img className="btn btn-outline btn-sm" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAa0lEQVRYhWNgGAUjHTAic958+PgfmS8iwM/IQGPARGsLyAJvPnz8jx4atAIDHgJY45hWvseWpgY8BFjwSVIrF+AL0QEPgVEHjDpg1AGjDsBbEtKjRhzwEBgFBGs7UtuJpKof8DQw6oBRMAoAJUkfkGzu3BkAAAAASUVORK5CYII="/>   
                    </button>

                </div>
                
            }

        </>

    )

}

export default CartWidget