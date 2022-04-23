const NavBar = (add) => {
    return (
        
        <div class="navbar bg-base-100">

            <div class="navbar-start">

                <a class="btn btn-ghost normal-case text-xl">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVRIie2TzQ2CQBCFvzGWQKzCCogeLMISJBZiLMGELQfFDrx692QHjgeQwLLALgZPvtNksvPz5u2DPwYgdkINORCP7HeRhHU9MXM8GtscYGUn5l0vJWmz64Ma1JV3MagX5Wo423EIGgM0ZVsE3MvUC6rN6rFjm6Km6lGiOoOmRAg3IOLFRvZkIZuqIQYy4ImwlB2PJoMZJ2ABHEKbA0jCFeEIRChpm0GHSGPx+SS9Ik8CNegYNl11nT6wil3ubrnWBd8Tudzdcu03A4BCuFCHDw7o08NHKy8NQhramPybejOwb+/L5vdG+8PGG/JFScun9G0TAAAAAElFTkSuQmCC"/>
                    GachaDealer           
                </a>

            </div>

            <div class="navbar-center hidden lg:flex">

                <ul class="menu menu-horizontal p-0">

                    <li><a>Order</a></li>
                    <li><a>🇯🇵 ⇢ 🇨🇴</a></li>
                    <li><a>Shipping</a></li>

                </ul>

            </div>
            
            <div class="navbar-end">
                
                {add.children}

            </div>


        </div>

    )
}

export default NavBar

