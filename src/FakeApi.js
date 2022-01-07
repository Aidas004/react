import React, {useEffect, useState} from 'react';
import "./FakeApi.css"
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Electronics from "./pages/electronics";
import Jewelery from "./pages/jewelery";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import { useParams } from "react-router-dom";


const FakeApi = () => {
    const [getPosts, setPosts] =useState([])
    const [getId, setId] = useState('')
    function byId (x) {
        setId(x)
    }
    function fetchPosts () {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(json => {
                setPosts(...getPosts, json)
                console.log(json)
            })
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="container">

            <Router>
                <div className="sideBar">
                    <h1 className='logo'>CATEGORIES</h1>
                    <div className="button">
                        <Link to='/'>All Products</Link>
                    </div>
                    <div className="button">
                        <Link to='/products/category/electronics'>electronics</Link>
                    </div>
                    <div className="button">
                        <Link to='/products/category/jewelery'>jewelery</Link>
                    </div>
                    <div className="button">
                        <Link to="/products/category/men'sclothing">men's clothing</Link>
                    </div>
                    <div className="button">
                        <Link to="/products/category/women'sclothing">women's clothing</Link>
                    </div>
                </div>


                <Routes>
                        <Route path='/' element={<Products setId={byId} getPosts={getPosts} />}/>
                        <Route path='/product/byid' element={<SingleProduct getId={getId} getPosts={getPosts}/>}/>
                        <Route path='/products/category/electronics' element={<Electronics getPosts={getPosts} />}/>
                        <Route path='/products/category/jewelery' element={<Jewelery getPosts={getPosts} />}/>
                        <Route path="/products/category/men'sclothing" element={<Mens getPosts={getPosts} />}/>
                        <Route path="/products/category/women'sclothing" element={<Womens getPosts={getPosts} />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default FakeApi;
