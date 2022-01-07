import React from 'react';

const Womens = ({getPosts}) => {
    return (
        <div className="container2">
            {/* eslint-disable-next-line array-callback-return */}
            {getPosts.map((x, index) => {
                if (x.category === "women's clothing") {
                    return (
                        <div  className="postCard" key={index}>
                            <img src={x.image} alt=""/>
                            <h5>{x.title}</h5>
                            <h4>EUR: {x.price}</h4>
                        </div>
                    )}})}
        </div>
    );
};

export default Womens;
