import React from 'react'
import { NavLink } from 'react-router-dom'
import banner from './banner.jpg'
import pfp from './pfp.jpg'
import uwgb from './uwgb.jpg'
import duc from './duc.jpg'
import aec from './aec.jpg'
import colab from './colab.png'


function Portfolio() {
    return (
        <div class="body ">
            <div class="portfolio-head">
                <div class="banner-imgs ">
                    {/* <img class="col-12 m-0  p-0 banner" src={banner} alt="" /> */}
                    {/* <div class='bg-image'></div> */}
                    <img class=" profile-pic" src={pfp} alt="" />
                </div>
            </div>
            <div class="white-banner">

            </div>
            <div class="container-fluid ">
                <h1 class=" "> Jose C Salazar Mendez</h1>
                <p class="bio">He/Him - Hispanic/Latino</p>
            </div>
            <hr class="col-6"></hr>


            <div class="container-fluid">
                <h3>Education </h3>

                <div class="row edu pb-4">
                    <div class="col-sm-5 col-md-2 mt-2">
                        <img class="logo" src={duc} alt="" />
                    </div>
                    <div class="col-sm-4 col-md-4 mt-2">
                        <div class="edu-name">Dominican University of California</div>
                        <div> Aug 2020 -  Dec 2022 </div>
                        <div class="edu-desc">Dominican's Acccelerated Program with a Bachlors of Computer Science</div>
                    </div>
                </div>
                <div class="row edu pb-4">
                    <div class="col-sm-5 col-md-2 mt-2">
                        <img class="logo" src={uwgb} alt="" />
                    </div>
                    <div class="col-sm-4 col-md-4 mt-2">
                        <div class="edu-name">University of Wisconsin - Green Bay</div>
                        <div> Sept 2018 -  May 2020</div>
                        <div class="edu-desc"> Associate's Degree of Art's and Science</div>
                    </div>
                </div>
            </div>
            <hr class="col-6"></hr>
            <div class="container-fluid ">
                <h3>Technical Work Experience </h3>
                <div class=" row edu p-2">
                    <div class="col-sm-6 col-md-2 mt-2">
                        <img class="work-logo" src={colab} alt="" />
                    </div>
                    <div class="col-sm-6 col-md-4 mt-2">
                        <div class="work-name">Co.lab</div>
                        <div>May 2022 - Aug 2022</div>
                        <div class="edu-desc"> Software Developer</div>

                        <div class="work-links"> https://github.com/gaja-project/gaja </div>
                        {/* <div class="work-links">https://mailchi.mp/f9063425d3aa/gaja</div> */}

                    </div>
                </div>
                <div class="work-desc col-12 pb-4">
                    An 8 week project in a team of 4 to research and pitch a software solution
                    for language learners. Performed market research, user journeys and viewed
                    analytics to determine the best solution.
                    Led, planned and developed a working software solution in the small time
                    frame exceeding our MVP deliverables. Created a dual-subtitle
                    chrome extension that works on Netflix. Worked in a remote startup environment,
                    collaborating with team members across the US.
                    Built using Javascript and CSS and added user features
                    for customization and usability.
                    Landing page at https://mailchi.mp/f9063425d3aa/gaja.
                </div>
            </div>

            <hr class="col-6"></hr>
            <div class="container-fluid">
                <h3> Notable Projects </h3>
                <div class="row edu p-2">
                    <div class="col-sm-6 col-md-6">
                        <div class="work-name">Omniconxx</div>
                        <div class="edu-desc">Backend Developer</div>
                        <div class="work-links">Javascript, React.js, Node.js, MongoDB</div>
                        <div> https://github.com/OmniConnx/OmniConnx </div>
                    </div>
                </div>
                <div class="work-desc col-12 pb-3">
                    A 12 week project in an out of a class setting in of 10 team to build a
                    web application for a client in the UK.
                    Created a social media application proof of concept and collaborated
                    with client to fufill requirements.
                    to help medical students reach out to professionals.
                    Planned, designed, problem solved, and implemented routes, schemas,
                    and Oauth for user security.
                </div>
                <div class="row edu p-2">
                    <div class="col-sm-6 col-md-6">
                        <div class="work-name">Hoya</div>
                        <div class="edu-desc">Frontend Developer</div>
                        <div class="work-links">Python, Flask, MongoDB, Tensorflow.</div>
                        <div>https://github.com/TheVille415/spd_housing</div>
                    </div>
                </div>
                <div class="work-desc col-12 pb-3">
                    A 8 week project in a team of 5 to solve housing selling and buying issues.
                    Created a web application to that can find houses and give you an estimate
                    on the value of your house using machine learning.
                    As a lead frontend developer, worked on UI/UX concepts and applied simple
                    to use UI and features.
                </div>
                <div class="row edu p-2">
                    <div class="col-sm-6 col-md-6">
                        <div class="work-name">Everything Weather</div>
                        <div class="edu-desc">Software Developer</div>
                        <div class="work-links">Javascript, React.js, D3.js.</div>
                        <div>https://github.com/TheVille415/spd_housing</div>
                    </div>
                </div>
                <div class="work-desc col-12 pb-3">
                    A weather application built with react that gives you weather
                    data for a daily and weekly forecast. Implemented D3.js to create
                    a simple UI for convenience, interpretation, and readability of weather data.
                    Applied user tests, analytics, AB testing, and growth hacks to extend reachability to users.
                </div>
                <h4> Smaller projects</h4>
                <div class="row edu p-2 pb-4">
                    <div class="col-4">
                        <div class="project-card h-100 p-3">
                            <div class="work-name">iOS Calculator App</div>
                            <div class="work-links">Swift</div>
                            <div>https://github.com/TheVille415/spd_housing</div>
                            <div>I built an iOS calculator apps similar to the default one</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="project-card h-100 p-3">
                            <div class="work-name">Eutheruem Contract</div>
                            <div class="work-links">Solidium</div>
                            <div>https://github.com/TheVille415/spd_housing</div>
                            <div>I deployed a smart contract to the testnet</div>
                        </div>
                    </div>
                </div>
                {/* <div class="row edu p-2">
                    <div class="col-4">
                        <div class="project-card h-100 p-3">
                            <div class="work-name">iOS Calculator App</div>
                            <div class="work-links">Swift</div>
                            <div>https://github.com/TheVille415/spd_housing</div>
                            <div>I built an iOS calculator apps similar to the default one</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="project-card h-100 p-3">
                        <div class="work-name">Eutheruem Contract</div>
                            <div class="work-links">Solidium</div>
                            <div>https://github.com/TheVille415/spd_housing</div>
                            <div>I deployed a smart contract to the testnet</div>
                        </div>
                    </div>
                </div> */}
            </div>

            <hr class="col-6"></hr>
            <div class="container-fluid">
                <h3> About Me </h3>
                <div class="work-desc col-12 pb-4">
                    I am a recent CS graduate with an interest in backend, 
                    frontend, and mobile development. My strengths are problem solving, 
                    leading creative projects, and excellent communication skills. 
                    I’m looking forward to demonstrating my many various skills and 
                    working with talented individuals.

                </div>
            </div>

            <hr class="col-6"></hr>
            <div class="container-fluid">
                <h3>Other work Experience </h3>
                <div class="row edu p-2">
                    <div class="logo-box col-sm-6 col-md-2 mt-2">
                        <img class="work-logo" src={aec} alt="" />
                    </div>
                    <div class="col-sm-6 col-md-4 mt-2">
                        <div class="work-name">American Excelsior</div>
                        <div> Sept 2018 -  May 2022</div>
                        <div class="edu-desc"> Material Handler/ Machine Operator</div>
                        <div class="work-links">Sheboyagn, WI</div>
                    </div>
                </div>
                <div class="work-desc col-12 pb-4">
                    Certified forklift and machine operator. Responsible for completing
                    forklift safety checklist for company forklifts. Responsible for maintaining
                    safety rules and procedures while moving materials with a forklift
                    in a crowded wearhouses environment. Machine pourhead operator responsible
                    for ensuring high quality foam production. Accident free on both as
                    machine line lead, and material handler.
                </div>
                <div class="row edu p-2">
                    {/* <div class="logo-box col-sm-6 col-md-2 mt-2">
                        <img class="work-logo" src={aec} alt="" />
                    </div> */}
                    <div class="col-sm-6 col-md-4 mt-2">
                        <div class="work-name">Whispering Orchards</div>
                        <div> June 2017 -  May 2022</div>
                        <div class="edu-desc"> Line Cook</div>
                        <div class="work-links">Cleveland, WI</div>
                    </div>
                </div>
                <div class="work-desc col-12 pb-4">
                    Line cook responsible for presparing food for customers in a timely fashion.
                </div>
            </div>

            {/* <div class="nav">
            <NavLink
                className="button nav-link"
                activeClassName="nav-link-active"
                exact
                to="/">Jose's Computer Services </NavLink>

            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                to="/about">About</NavLink>

        </div> */}


        </div>

    )
}

export default Portfolio