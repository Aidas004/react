import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigation = useNavigate()
    function nav (x) {
        navigation(x)
    }
    return (
        <div className='homeContainer'>
            <div onClick={()=>nav('/createpost')} className="btn">Create Post</div>
            <div onClick={()=>nav('/allposts')} className="btn">All Posts</div>
        </div>
    );
};

export default Home;
