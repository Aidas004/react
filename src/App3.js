import './App3.css'
import Home from "./components3/Home";
import Shop from "./components3/Shop";
import Cart from "./components3/Cart";
import {useState} from "react";

function App3 () {

    const [window, setWindow] = useState(0)
    let showWindow;
    if (window === 0) {
        showWindow = <Home />
    }
    if (window === 1) {
        showWindow = <Shop />
    }
    if (window === 2) {
        showWindow = <Cart />
    }
    return (
        <div className="App">
            <div className="toolBar">
                <button onClick={() => setWindow(0)}>HOME</button>
                <button onClick={() => setWindow(1)}>SHOP</button>
                <button onClick={() => setWindow(2)}>CART</button>

            </div>
            {showWindow}
        </div>
    )
}
export default App3