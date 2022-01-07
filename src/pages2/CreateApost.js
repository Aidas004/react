import React, {useState} from 'react';

const Create = ({setPosts, getPosts}) => {
    const [getTitle, setTitle] = useState('')
    const [getRegion ,setRegion] = useState('')
    const [getCategory, setCategory] = useState('')
    const [getDescription, setDescription] = useState('')
    const [getLogo, setLogo] = useState('')
    const [getType, setType] = useState('')
    const [getTypeTitle, setTypeTitle] = useState('')
    function onChange (e) {

        if (e.target.id === 'job-title') {
            setTitle(e.target.value)
        }
        if (e.target.id === 'regions') {
            setRegion(e.target.value)
        }
        if (e.target.id === 'categories') {
            setCategory(e.target.value)
        }
        if (e.target.id === 'description') {
            setDescription(e.target.value)
        }
        if (e.target.id === 'logo') {
            setLogo(e.target.value)
        }
        if (e.target.id === 'type') {
            setType(e.target.value)
            setTypeTitle(e.target.about)
        }
    }
    const JobPost = {
        Title: getTitle,
        Region: getRegion,
        Category: getCategory,
        Description: getDescription,
        Logo: getLogo,
        Type: getType,
        TypeTitle: getTypeTitle
    }


    function button () {
        setPosts([JobPost, ...getPosts])
        console.log(getPosts)
    }



    return (
        <div className='container'>
           <div className="createContainer d-flex column a-center">
               <div className='d-flex column w100'>
                   <label htmlFor="job-title">JOB TITLE</label>
                   <input onChange={(event => onChange(event))}  placeholder='JOB TITLE' className='border ptb w100' id='job-title' type="text"/>
               </div>
               <div className='d-flex mt-50 column w100'>
                   <label htmlFor="regions">JOB REGION</label>
                   <select onChange={(event => onChange(event))}  className='select mp border ptb w100' name="regions" id="regions">
                       <option value=""/>
                       <option value="Vilnius">Vilnius</option>
                       <option value="Kaunas">Kaunas</option>
                       <option value="Klaipėda">Klaipėda</option>
                   </select>
               </div>
                <div className="d-flex mt-50 column w100">
                    <label htmlFor="categories">JOB CATEGORY</label>
                    <select onChange={(event => onChange(event))} className='select ptb mp border w100' name="categories" id="categories">
                        <option value=""/>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>

               <div className="d-flex mt-50 column w100">
                   <label htmlFor="type">JOB TYPE</label>
                   <select onChange={(event => onChange(event))} className='select ptb mp border w100' name="type" id="type">
                       <option value=""/>
                       <option about="FREELANCE" value="FREELANCE">FREELANCE</option>
                       <option name="FULL TIME" value="FULL-TIME">FULL TIME</option>
                       <option name="PART TIME" value="PART-TIME">PART TIME</option>
                   </select>
               </div>

               <div className='d-flex column mt-50 w100'>
                   <label htmlFor="description">DESCRIPTION</label>
                   <textarea onChange={(event => onChange(event))}  placeholder='DESCRIPTION ABOUT A JOB' className='w100 ptb' name="description" id="description"></textarea>
               </div>


               <div className='d-flex column mt-50 w100'>
                   <label htmlFor="logo">LOGO</label>
                   <input onChange={(event => onChange(event))}  placeholder='LOGO URL' className='border ptb w100' id='logo' type="text"/>
               </div>
               <button onClick={button} className='mt-50'>POST A JOB</button>

           </div>

            <div className='bg-grey w100 d-flex a-center j-center column'>
                <div className=' d-flex a-center j-center column'>
                    <h1>Got a question?</h1>
                    <p>We're here to help. Check out our FAQs, send us an email or call us at 1 800 555 5555</p>

                </div>

                <div className='mt-50 d-flex w100'>
                    <div className='w25'>
                        <div className="logo"><img src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-new.svg" alt=""/></div>
                        <p>Job Searching Just Got Easy. Use Jobify to run a hiring site and earn money in the process!</p>
                    </div>
                    <div className='w25'>
                        <h4>Site Map</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Bookmarks</a></li>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Companies</a></li>
                            <li><a href="#">Companies List</a></li>
                            <li><a href="#">Company Dashboard</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Find A Job</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Jobify companies</a></li>
                            <li><a href="#">Jobify dashboard</a></li>
                            <li><a href="#">Jobify home</a></li>
                        </ul>
                    </div>
                    <div className='w25'>
                        <h4>Recent News Articles</h4>
                        <p>The Best (and Worst) Canadian Merchant Account Providers
                            March 29, 2016</p>
                        <p>Do you have a job that the average person doesn’t even know exists?</p>
                        <p>DigitalOcean launches first Canadian data centre in Toronto</p>
                    </div>
                    <div className='w25'>
                        <h4>Jobify Offices</h4>
                        <p>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282
                        </p>
                        <p>Jobify Inc Canada. 545 Younge St, Suite 11 Toronto, Ontario M4K 6F4</p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Create;
