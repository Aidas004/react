import React from "react";
import Product from "./product";
function User () {
    return (
        <div>
            <div className="UserContainer">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2FEmoji_Icon_Surprised_with_teeth_grande.png%3Fv%3D1513251063&f=1&nofb=1" alt=""/>
                <div>
                    <h1>Eur: 123</h1>
                    <h2>products: 1</h2>
                </div>
                <Product/>
            </div>
        </div>

    )
}
export default User