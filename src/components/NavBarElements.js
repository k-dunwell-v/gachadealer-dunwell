import { Link } from "react-router-dom";

const NavBarElements = ({dir}) => {

    let arrow;

    if (dir === "down") {

        arrow = <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

    }else {

        arrow = <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>

    }

    return (
        
        <>
            <li tabIndex="0">

                <Link to="/categories/" className="justify-between">
                    Categories
                    {arrow}
                </Link>

                <ul className="p-2 bg-base-100">

                    <li>
                        <Link to="/categories/figures/">
                            Figures
                        </Link>
                    </li>

                    <li>
                        <Link to="/categories/plushdolls/">
                            Plush Dolls
                        </Link>
                    </li>

                    <li>
                        <Link to="/categories/charactergoods/">
                            Character Goods
                        </Link>
                    </li>

                </ul>

            </li>

            <li>
                <Link to="/order/">
                    Track order
                </Link>
            </li>

            <li>
                <Link to="/shipping/">
                    Shipping
                </Link>
            </li>

        </>
            
    )


}

export default NavBarElements