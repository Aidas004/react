import React from "react";
import Product from "./product";

function Shop({buy}) {

    return (
        <div>
            <Product buy={buy}/>
        </div>
    )
}

export default Shop