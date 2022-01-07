import React from 'react';

const Home = () => {
    return (
        <div className='container'>
            <div className='hero homeImg'>
                <h1>The Easiest Way to Get Your New Job</h1>
                <p>Find jobs, create trackable resumes and enrich your applications.</p>
                <div className='inputs'>
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
                    <input className='btn' type="submit" value='SEARCH JOBS'/>
                </div>
            </div>

            <div className="companies">
                <h1>Companies We've Helped</h1>
                <p>Some of the companies we've helped recruit excellent applicants over the years.</p>
                <div className="compLogos">
                    <img
                        src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/optimizely-logo-final.svg"
                        alt=""/>
                    <img
                        src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/desk-logo-final.svg"
                        alt=""/>
                    <img
                        src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dribbble-logo-final.svg"
                        alt=""/>
                    <img
                        src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/disqus-logo-final.svg"
                        alt=""/>
                    <img
                        src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dolby-logo-final.svg"
                        alt=""/>
                </div>
            </div>

            <div className="stickyImg">
                <div className="col">
                    <div className="row"></div>
                    <div className="row">
                        <h1>Make Recruiting Your Competitive Advantage</h1>
                        <p>Talent is a top priority for all startup founders and executives. Jobify offers a way to
                            completely optimize your entire recruiting process. Find better candidates, conduct more
                            focused interviews, and make data-driven hiring decisions.</p>
                        <a className='getStarted' href="https://Google.com"><b>GET STARTED</b></a>
                    </div>
                </div>

            </div>
            <div className="d-flex column j-center a-center mt-60">
                <h1>Hundreds of Jobs From All Over the Globe</h1>
                <div className="listings">
                    <div className="listing d-flex d-flex space-btw">
                        <div className="left d-flex a-center">

                            {/*company img*/}

                            <img
                                src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg"
                                alt=""/>

                            {/*job title*/}
                            <div className='d-flex column  j-center'>
                                <h4>Art Director</h4>
                                <p>Art Director</p>
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
                            <h2>Vilnius, Lithuania</h2>
                            <div className='time FULL-TIME'>FULL TIME</div>
                        </div>

                    </div>
                    <div className="listing d-flex d-flex space-btw">
                        <div className="left d-flex a-center">

                            {/*company img*/}

                            <img
                                src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg"
                                alt=""/>

                            {/*job title*/}
                            <div className='d-flex column  j-center'>
                                <h4>Web Designer</h4>
                                <p>Web Designer</p>
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
                            <h2>Kaunas, Lithuania</h2>
                            <div className='PART-TIME time'>PART TIME</div>
                        </div>

                    </div>
                    <div className="listing d-flex d-flex space-btw">
                        <div className="left d-flex a-center">

                            {/*company img*/}

                            <img
                                src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-aol.jpg"
                                alt=""/>

                            {/*job title*/}
                            <div className='d-flex column  j-center'>
                                <h4>UX Designer</h4>
                                <p>UX Designer</p>
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
                            <h2>Klaipėda, Lithuania</h2>
                            <div className='FREELANCE time'>FREELANCE</div>
                        </div>

                    </div>
                    <div className="listing d-flex d-flex space-btw">
                        <div className="left d-flex a-center">

                            {/*company img*/}

                            <img
                                src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg"
                                alt=""/>

                            {/*job title*/}
                            <div className='d-flex column  j-center'>
                                <h4>Art Director</h4>
                                <p>Art Director</p>
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
                            <h2>Vilnius, Lithuania</h2>
                            <div className='time FULL-TIME'>FULL TIME</div>
                        </div>

                    </div>
                    <div className="listing d-flex d-flex space-btw">
                        <div className="left d-flex a-center">

                            {/*company img*/}

                            <img
                                src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg"
                                alt=""/>

                            {/*job title*/}
                            <div className='d-flex column  j-center'>
                                <h4>Web Designer</h4>
                                <p>Web Designer</p>
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
                            <h2>Kaunas, Lithuania</h2>
                            <div className='PART-TIME time'>PART TIME</div>
                        </div>

                    </div>
                    <div className="listing d-flex d-flex space-btw">
                        <div className="left d-flex a-center">

                            {/*company img*/}

                            <img
                                src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-aol.jpg"
                                alt=""/>

                            {/*job title*/}
                            <div className='d-flex column  j-center'>
                                <h4>UX Designer</h4>
                                <p>UX Designer</p>
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
                            <h2>Klaipėda, Lithuania</h2>
                            <div className='FREELANCE time'>FREELANCE</div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="stickyImg2">
                <div className="col">
                    <div className="row">
                        <h1>Make Recruiting Your Competitive Advantage</h1>
                        <p>Talent is a top priority for all startup founders and executives. Jobify offers a way to
                            completely optimize your entire recruiting process. Find better candidates, conduct more
                            focused interviews, and make data-driven hiring decisions.</p>
                        <p>Talent is a top priority for all startup founders and executives. Jobify offers a way to
                            completely optimize your entire recruiting process. Find better candidates, conduct more
                            focused interviews, and make data-driven hiring decisions.</p>
                        <a className='getStarted' href="https://Google.com"><b>GET STARTED</b></a>
                    </div>
                    <div className="row"></div>

                </div>

            </div>
            <div className="companies">
                <h1>Jobify Site Stats</h1>
                <p>Here we list our site stats and how many people we’ve helped find a job and companies have found recruits. It's a pretty awesome stats area!</p>
                <div className="compLogos2 d-flex">
                   <div className="logos">
                       <h1>20</h1>
                       <h2>Jobs Posted</h2>
                   </div>
                    <div className="logos">
                        <h1>0</h1>
                        <h2>Jobs Filled</h2>
                    </div>
                    <div className="logos">
                        <h1>20</h1>
                        <h2>Companies</h2>
                    </div>
                    <div className="logos">
                        <h1>5,299</h1>
                        <h2>Members</h2>
                    </div>
                </div>
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

export default Home;


