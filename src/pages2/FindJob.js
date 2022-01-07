import React from 'react';

const Find = ({getPosts, getFilter, setFilter}) => {

    function Click(e) {
        if (e.checked) {
            setFilter([...getFilter, e.value])
        } else {
            setFilter('')
        }
    }

    const filtered = getPosts.filter(y => y.Type.includes(getFilter)).map((x, i) => {
        return (


            <div key={i} className="listing d-flex d-flex space-btw">
                <div className="left d-flex a-center">
                    {/*company img*/}
                    <img src={x.Logo} alt=""/>
                    {/*job title*/}
                    <div className='d-flex column  j-center'>
                        <h4>{x.Title}</h4>
                        <p>{x.Title}</p>
                    </div>
                </div>
                <div className="right d-flex j-center a-center">
                    {/*location*/}
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                         className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                    <h2>{x.Region}, Lithuania</h2>
                    <div className={x.Type + " time"}>{x.Type}</div>
                </div>
            </div>


        )
    })


    return (
        <div className='container'>
            <div className='hero mapImg'>

            </div>
            <div className="companies">

                <div className="listings">

                    <div className='inputs greenInp d-flex a-center space-around'>
                        <input className='inp' placeholder='Keywords' type="text"/>
                        <select className='select' name="regions" id="regions">
                            <option value="All Regions">All Regions</option>
                            <option value="Vilnius">Vilnius</option>
                            <option value="Kaunas">Kaunas</option>
                            <option value="Klaipėda">Klaipėda</option>
                        </select>
                        <select className='select' name="categories" id="categories">
                            <option value="All Categories">All Categories</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <input style={{backgroundColor: "#ffffff", color: "#393e48"}} className='btn' type="submit"
                               value='SEARCH'/>
                    </div>

                    <div className="checkboxes d-flex a-center j-left">
                        <div className='check'>
                            <label form="partTimeJob">
                                <input onChange={(event) => Click(event.target)} type="checkbox" value='PART-TIME'
                                       id='partTimeJob'/>
                                PART TIME
                            </label>
                        </div>
                        <div className='check'>
                            <label form="fullTimeJob">
                                <input onChange={(event) => Click(event.target)} type="checkbox" value='FULL-TIME'
                                       id='fullTimeJob'/>
                                FULL TIME
                            </label>
                        </div>
                        <div className='check'>
                            <label form="freelance">
                                <input onChange={(event) => Click(event.target)} type="checkbox" value='FREELANCE'
                                       id='freelance'/>
                                FREELANCE
                            </label>
                        </div>
                        <div className='check'>
                            <label form="temporary">
                                <input onChange={(event) => Click(event.target)} disabled='disabled' type="checkbox"
                                       value='temporary' id='temporary'/>
                                TEMPORARY
                            </label>
                        </div>


                    </div>

                    {filtered}

                </div>

            </div>

            <div className='bg-grey w100 d-flex a-center j-center column'>
                <div className=' d-flex a-center j-center column'>
                    <h1>Got a question?</h1>
                    <p>We're here to help. Check out our FAQs, send us an email or call us at 1 800 555 5555</p>

                </div>

                <div className='mt-50 d-flex w100'>
                    <div className='w25'>
                        <div className="logo"><img
                            src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-new.svg"
                            alt=""/></div>
                        <p>Job Searching Just Got Easy. Use Jobify to run a hiring site and earn money in the
                            process!</p>
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

export default Find;
