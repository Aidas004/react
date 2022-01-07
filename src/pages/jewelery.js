import React from 'react';

const Jewelery = ({getPosts}) => {
    return (
        <div className="container2">
            {/* eslint-disable-next-line array-callback-return */}
            {getPosts.map((x, index) => {
                if (x.category === "jewelery") {
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

export default Jewelery;
