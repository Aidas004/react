import './App3.css'
import Home from "./components3/Home";
import Shop from "./components3/Shop";
import Cart from "./components3/Cart";

function App3 () {
    return (
        <div className="App">
            <div className="toolBar">
                <a href="#">HOME</a>
                <a href="#">SHOP</a>
                <a href="#">CART</a>
            </div>
            <Home/>
            <Shop/>
            <Cart/>
        </div>
    )
}
export default App3