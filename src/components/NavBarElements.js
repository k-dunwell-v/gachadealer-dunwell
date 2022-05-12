
const NavBarElements = ({dir}) => {

    let arrow;

    if (dir == "down") {

        arrow = <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

    }else {

        arrow = <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>

    }

    return (
        
        <>
            <li tabindex="0">

                <a class="justify-between" href="/categories/">
                    Categories
                    {arrow}
                </a>

                <ul class="p-2 bg-base-100">

                    <li>
                        <a href="/categories/figures/">
                            Figures
                        </a>
                    </li>

                    <li>
                        <a href="/categories/plushdolls/">
                            Plush Dolls
                        </a>
                    </li>

                    <li>
                        <a href="/categories/charactergoods/">
                            Character Goods
                        </a>
                    </li>

                </ul>

            </li>

            <li><a>🇯🇵 ⇢ 🇨🇴</a></li>

            <li><a>Shipping</a></li>

        </>
            
    )


}

export default NavBarElements