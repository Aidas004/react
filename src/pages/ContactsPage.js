// import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
const AllPosts = ({getPosts, fetchByName}) => {
    const navigate = useNavigate();
    // const [getName, setName] = useState('/user/{getName}')
    function nav(name) {
        fetchByName(name)
        navigate(`/users/${name}`)
        console.log(name)
    }
    return (
        <div className='container'>
            {getPosts.map((x, index) => {
                return (
                    <div className="postCard" key={index}>
                        <div>
                            <img src={x.image} alt=""/>
                        </div>
                        <div>
                            <h1 className='userName' onClick={()=>nav(x.username)}>{x.username}</h1>
                            <h4>{x.title}</h4>
                        </div>

                    </div>)})}
        </div>
    );
};

export default AllPosts;
