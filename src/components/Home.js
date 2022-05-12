import ItemListContainer from './container/ItemListContainer';
import Item from "./container/Item"

const Home = () => {

    return (

        <div className="wrapper">
            <ItemListContainer>
                <div className="right">
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </ItemListContainer>
        </div>
            
    )


}

export default Home
