import React, {useState} from 'react';
import "./App2.css"
import Home from "./pages2/Home";
import Create from "./pages2/CreateApost";
import Find from "./pages2/FindJob";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const App2 = () => {
    const[getPosts, setPosts] = useState([

        {
            Title: 'Web Designer',
            Region: 'Vilnius',
            Category: 'development',
            Description: '',
            Logo: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg',
            Type: 'FREELANCE',
            TypeTitle: ''
        },
        {
            Title: 'UX Designer',
            Region: 'Kaunas',
            Category: 'design',
            Description: '',
            Logo: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-aol.jpg',
            Type: 'FULL-TIME',
            TypeTitle: ''
        },
        {
            Title: 'Art Director',
            Region: 'Klaipėda',
            Category: 'design',
            Description: '',
            Logo: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg',
            Type: 'PART-TIME',
            TypeTitle: ''
        },
        {
            Title: 'Web Designer',
            Region: 'Vilnius',
            Category: 'development',
            Description: '',
            Logo: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg',
            Type: 'FREELANCE',
            TypeTitle: ''
        },
        {
            Title: 'UX Designer',
            Region: 'Kaunas',
            Category: 'design',
            Description: '',
            Logo: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-aol.jpg',
            Type: 'FULL-TIME',
            TypeTitle: ''
        },
        {
            Title: 'Art Director',
            Region: 'Klaipėda',
            Category: 'design',
            Description: '',
            Logo: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg',
            Type: 'PART-TIME',
            TypeTitle: ''
        }

    ])
    const [getFilter, setFilter] = useState('')
    return (
        <div>
            <Router>
                <div className="toolbar">
                    <div className="logo"><img src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-new.svg" alt=""/></div>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to='/findajob'>Find A Job</Link>
                        <Link to='/postajob'>Post A Job</Link>
                        <div className='login'>
                            <Link to='/'>Login</Link>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route path='/' element={<Home getPosts={getPosts} />}/>
                    <Route path='/postajob' element={<Create getPosts={getPosts} setPosts={setPosts} />}/>
                    <Route path='/findajob' element={<Find getFilter={getFilter} setFilter={setFilter} getPosts={getPosts} />}/>
                </Routes>
            </Router>
        </div>

    );
};

export default App2;
