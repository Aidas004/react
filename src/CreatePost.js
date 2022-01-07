import React, {useState} from 'react';
import './CreatePost.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import Create from "./pages/Create";

const CreatePost = () => {
    const [getArray, setArray] = useState([])
    return (
        <div className='container'>
            <Router>
                <div className="toolbar">
                    <div className="button">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="button">
                        <Link to='/allposts'>All Posts</Link>
                    </div>
                </div>


                <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/allposts' element={<AllPosts getArray={getArray} />}/>
                        <Route path='/createpost' element={<Create getArray={getArray} setArray={setArray} />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default CreatePost;
