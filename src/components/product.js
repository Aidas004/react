import React from "react";
function Product (x, buy) {
    return (
        <div>
            <div className="productCard">
                <div className="cardIn">
                    <div style={{justifyContent: 'center'}}>
                        <img src={x.image} alt=""/>
                        <p>{x.title}</p>
                    </div>
                    <p>Eur: {x.price}</p>
                </div>
                <button onClick={buy}>Buy</button>
            </div>
        </div>

    )
}
export default Product