import React, {useEffect} from 'react';
import { useState } from "react";

const User = ({getNamePost}) => {
    console.log(getNamePost)
    return (
        <div className='container'>
            {getNamePost.map((x, index) => {
                return (
                    <div className="postCard" key={index}>
                        <div>
                            <img src={x.image} alt=""/>
                        </div>
                        <div>
                            <h1 className='userName'>{x.username}</h1>
                            <h4>{x.title}</h4>
                        </div>

                    </div>)})}
        </div>
    );
};

export default User;
