import { Link } from "react-router-dom"

const CartWidget = () => {
    return (

        <Link to="/cart/">
            <img className="btn btn-outline btn-sm" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAa0lEQVRYhWNgGAUjHTAic958+PgfmS8iwM/IQGPARGsLyAJvPnz8jx4atAIDHgJY45hWvseWpgY8BFjwSVIrF+AL0QEPgVEHjDpg1AGjDsBbEtKjRhzwEBgFBGs7UtuJpKof8DQw6oBRMAoAJUkfkGzu3BkAAAAASUVORK5CYII="/>   
        </Link>

    )
}

export default CartWidget
