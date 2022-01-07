import React from 'react';

const SingleProduct = ({getPosts, getId}) => {
    return (
        <div className="container2">
            {/* eslint-disable-next-line array-callback-return */}
            {getPosts.map((x, index) => {
                if (x.id === getId) {
                    return (
                        <div  className="singleCard" key={index}>
                            <div className="img">
                                <img src={x.image} alt=""/>
                            </div>
                            <div className="about">
                                <h2>{x.title}</h2>
                                <p>{x.description}</p>
                                <div className="price">
                                    <h2>EUR: {x.price}</h2>
                                    <h2>Rating: {x.rating.rate}</h2>
                                </div>
                            </div>

                        </div>
                    )}})}
        </div>
    );
};

export default SingleProduct;
