import React from 'react';

const Shop = ({products, onClick, onClick1}) => {
    return (
        <div>
            <div className="home">
                <div className="productCard">
                    <img src={products[0].image} alt="#"/>
                    <h3>{products[0].title}</h3>
                    <p>{products[0].price}</p>
                    <button onClick={onClick}>Add To Cart</button>
                </div>
                <div className="productCard">
                    <img src={products[1].image} alt="#"/>
                    <h3>{products[1].title}</h3>
                    <p>{products[1].price}</p>
                    <button  onClick={onClick1}>Add To Cart</button>
                </div>
                <div className="productCard">
                    <img src={products[2].image} alt="#"/>
                    <h3>{products[2].title}</h3>
                    <p>{products[2].price}</p>
                    <button>Add To Cart</button>
                </div>
                <div className="productCard">
                    <img src={products[3].image} alt="#"/>
                    <h3>{products[3].title}</h3>
                    <p>{products[3].price}</p>
                    <button>Add To Cart</button>
                </div>
                <div className="productCard">
                    <img src={products[4].image} alt="#"/>
                    <h3>{products[4].title}</h3>
                    <p>{products[4].price}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
