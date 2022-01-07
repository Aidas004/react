import React from 'react';

const Electronics = ({getPosts}) => {
    return (
        <div className="container2">
            {/* eslint-disable-next-line array-callback-return */}
            {getPosts.map((x, index) => {
                if (x.category === "electronics") {
                return (
                    <div  className="postCard" key={index}>
                        <img src={x.image} alt=""/>
                        <h4>{x.title}</h4>
                        <h4>EUR: {x.price}</h4>
                    </div>
                )}})}
        </div>
    );
};

export default Electronics;
