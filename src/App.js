import './App.css'
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import AllPosts from "./pages/ContactsPage";
import User from "./pages/HomePage";


function App () {
    const [getPosts, setPosts] =useState([])
    function fetchPosts () {
        fetch('http://167.99.138.67:1111/getallposts')
            .then((res) => res.json())
            .then(json => {
                setPosts(...getPosts, json.data)
            })
    }



    // const [getName, setName] = useState('')
    const [getNamePost, setNamePost] =useState([])

    function fetchByName (name) {
        fetch(`http://167.99.138.67:1111/getuserposts/${name}`)
            .then((res) => res.json())
            .then(json => {
                setNamePost(...getNamePost, json.data)
                console.log(json)
                console.log(getNamePost)
            })
    }

    // function set () {
    //     fetch(`http://167.99.138.67:1111/getuserposts/${getName}`)
    //         .then((res) => res.json())
    //         .then(json => {
    //             setNamePost(...getNamePost, json.data)
    //             console.log(json)
    //             console.log(getNamePost)
    //         })
    // }





    return (
        <div className="App">
            <div className="container">
                <Router>
                    <Routes>
                        <Route path='/' element={<AllPosts fetchByName={fetchByName} getPosts={getPosts}/>}/>
                        <Route path='/users/:userName' element={<User getNamePost={getNamePost}/>}/>







                    </Routes>
                </Router>
            </div>
        </div>
    )
}
export default App
