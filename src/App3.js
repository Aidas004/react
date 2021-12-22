import './App3.css'
import Home from "./components3/Home";
import Shop from "./components3/Shop";
import Cart from "./components3/Cart";
import React, {useState} from "react";

function App3 () {

    const products = [
        {
            image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
            title: "green chair",
            price: "EUR: 35.38"
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdzynfurnitures.com%2Fwp-content%2Fuploads%2F2020%2F04%2FDSC5652_N-scaled.jpg&f=1&nofb=1",
            title: "simple chair",
            price: "EUR: 19.99"
        },
        {
            image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
            title: "fotelis chair",
            price: "EUR: 55.00"
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.homesdirect365.co.uk%2Fimages%2Febony-bristol-swivel-chair-p42796-36417_zoom.jpg&f=1&nofb=1",
            title: "Boss chair",
            price: "EUR: 128.00"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
            title: "king chair",
            price: "EUR: 88.25"
        },
    ]

    const [window, setWindow] = useState(0)
    let [card, setCard] = useState("")
    let showWindow;
    function onClick () {
        setCard(<div className="productCard">
            <img src={products[0].image} alt="#"/>
            <h3>{products[0].title}</h3>
            <p>{products[0].price}</p>
        </div>)
    }
    function onClick1 () {
        setCard(<div className="productCard">
            <img src={products[1].image} alt="#"/>
            <h3>{products[1].title}</h3>
            <p>{products[1].price}</p>
        </div>)
    }

    if (window === 0) {
        showWindow = <Home />
    }
    if (window === 1) {
        showWindow = <Shop onClick={onClick} onClick1={onClick1} products={products}/>
    }
    if (window === 2) {
        showWindow = <Cart card={card}/>
    }
    return (
        <div className="App">
            <div className="toolBar">
                <button onClick={() => setWindow(0)}>HOME</button>
                <button onClick={() => setWindow(1)}>SHOP</button>
                <button onClick={() => setWindow(2)}>CART</button>
            </div>
            <div className="container">
                {showWindow}
            </div>
        </div>
    )
}
export default App3