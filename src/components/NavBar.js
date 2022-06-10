
import Cart from "./Cart"
import CartWidget from "./CartWidget"
import NavBarElements from "./NavBarElements"

const NavBar = () => {

    return (
        
        <div className="navbar bg-base-200" data-theme="acid">

            <div className="navbar-start">

                <div className="dropdown relative">

                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        
                        <NavBarElements dir="right"/>

                    </ul>

                </div>

                <a href="/" className="btn btn-ghost normal-case text-xl">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVRIie2TzQ2CQBCFvzGWQKzCCogeLMISJBZiLMGELQfFDrx692QHjgeQwLLALgZPvtNksvPz5u2DPwYgdkINORCP7HeRhHU9MXM8GtscYGUn5l0vJWmz64Ma1JV3MagX5Wo423EIGgM0ZVsE3MvUC6rN6rFjm6Km6lGiOoOmRAg3IOLFRvZkIZuqIQYy4ImwlB2PJoMZJ2ABHEKbA0jCFeEIRChpm0GHSGPx+SS9Ik8CNegYNl11nT6wil3ubrnWBd8Tudzdcu03A4BCuFCHDw7o08NHKy8NQhramPybejOwb+/L5vdG+8PGG/JFScun9G0TAAAAAElFTkSuQmCC"/>
                    GachaDealer           
                </a>
                
            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal p-0">

                    <NavBarElements dir="down"/>

                </ul>

            </div>

            <div className="navbar-end">

                <CartWidget/>

                <Cart/>
        
            </div>

        </div>

    )
}

export default NavBar

