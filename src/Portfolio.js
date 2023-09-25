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
                <p>He/Him</p>
            </div>
            <hr></hr>
            

            <div class="container-fluid">
                <h3>Education </h3>

                <div class="row edu pb-4">
                    <div class="col-sm-5 col-md-2 mt-2">
                        <img class="logo" src={duc} alt=""/>
                    </div>
                    <div class="col-sm-4 col-md-4 mt-2">
                        <div class="edu-name">Dominican University of California</div>
                        <div> Aug 2020 -  Dec 2022 </div>
                        <div class="edu-desc">Dominican's Acccelerated Program with a Bachlors of Computer Science</div>
                    </div>
                </div>
                <div class="row edu pb-4">
                    <div class="col-sm-5 col-md-2 mt-2">
                        <img class="logo" src={uwgb} alt=""/>
                    </div>
                    <div class="col-sm-4 col-md-4 mt-2">
                        <div class="edu-name">University of Wisconsin - Green Bay</div>
                        <div> Sept 2018 -  May 2020</div>
                        <div class="edu-desc"> Associate's Degree of Art's and Science</div>
                    </div>
                </div>
            </div>
            {/* <hr></hr> */}
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
            <div class="container-fluid">
                <h3> Notable Projects </h3>


            </div>
            <div class="container-fluid">
                <h3> About Me </h3>

            </div>
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
                        <div class="work-links">Cheesehead</div>
                    </div>
                </div>
                <div class="work-desc col-12">
                    Certified forklift and machine operator. Responsible for completing
                    forklift safety checklist for company forklifts. Responsible for maintaining
                    safety rules and procedures while moving materials with a forklift
                    in a crowded wearhouses environment. Machine pourhead operator responsible
                    for ensuring high quality foam production. Accident free on both as
                    machine line lead, and material handler.
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
