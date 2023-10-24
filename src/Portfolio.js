import React from 'react'
import { NavLink } from 'react-router-dom'
import banner from './banner.jpg'
import pfp from './pfp.jpg'
import uwgb from './uwgb.jpg'
import duc from './duc.jpg'
import aec from './aec.jpg'
import colab from './colab.png'
import duolingo from './duolingo.jpeg'
import coursera from './coursera.webp'
import music from './music.png'
import computer from './computer.jpg'

const email = "josesm0415@gmail.com"
// function copyToClipboard() {
//     const email = "josesm0415@gmail.com"
//     navigator.clipboard.writeText(email);
//     // Alert the copied text
//     alert("Copied to clipboard");
//   }

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
                <div class="row edu">
                    <a class="col-5 col-sm-12 links" href="https://github.com/jsm-txt">github.com/jsm-txt</a>
 
                </div>
                <div class="row edu">
                    <a class=" col-5 col-sm-12 links" href="https://www.linkedin.com/in/jose-salazar-mendez-58a481206/">linkedin.com/in/jose-salazar-mendez-58a481206</a>

                </div>
                <div class="row edu">
                    <button class="col-5 col-sm-12 button-link links" onClick={() => { navigator.clipboard.writeText(email); alert("Copied to clipboard") }} value="josesm0415@gmail.com">josesm0415@gmail.com</button>
                </div>
            </div>
            <hr class="col-6 mt-3"></hr>

            <div class="container-fluid">
                <h3> About Me </h3>
                <div class="work-desc col-12 pb-4">
                    A recent graduate from Dominican University of California with a Bachelor's in Computer Sciece. 
                    I have 6 years worth of higher education including the accelerated program from Dominican University combined
                    with my previous course work. I've collaborated with many other developers, fellow students, and clients 
                    while bringing a lot of enthusiasm, motivation and will to learn to the table. I enjoy getting to know more people in the field and gaining experience that will allow me to grow as a developer.
                </div>
            </div>

            <hr class="col-6"></hr>
            <div class="container-fluid col-12">
                <h3> Skills </h3>
                <div class="row edu p-2">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="edu-name">
                            Technical Skills
                        </div>
                        <hr class="sline"></hr>
                        <ul class="skill-desc">
                            <li>JavaScript (Node.js, React.js, Express.js, D3.js Chai)</li>
                            <li>Python (Flask, Pytest)</li>
                            <li>Java</li>
                            <li>Typescript</li>
                            <li>Swift (SwiftUI, UIKit)</li>
                            <li>Databases (SQL, MongoDB)</li>
                            <li>Cloud Development (Azure, Familiar with AWS,)</li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <div class="edu-name">
                            Personal Traits
                        </div>
                        <hr class="sline"></hr>
                        <ul class="skill-desc">
                            <li>Excellent Communication </li>
                            <li>Team Player</li>
                            <li>Fast Learner</li>
                            <li>Strong Under Pressure</li>
                            <li>Level Headed</li>
                            <li>Immune to Stress</li>
                            <li>Hard Worker</li>
                        </ul>
                    </div>
                </div>
               
                <div class="edu-name col-12 pb-0">
                    Other Skill Sets: 
                </div>
                <div class="work-desc col-12 pb-2">
                    Agile Methodologies, Containerization, DevOps, Forklift Certified
                </div>
                <div class="edu-name col-12 pb-0">
                    Languages: 
                </div>
                <div class="work-desc col-12 pb-4">
                    English - Fluent, Spanish - Fluent, French - Intermediate
                </div>
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
                        <div class="edu-desc">Dominican's Acccelerated Program, Bachelor of Science, Computer Science</div>
                    </div>
                </div>
                <div class="row edu pb-4">
                    <div class="col-sm-5 col-md-2 mt-2">
                        <img class="logo" src={uwgb} alt="" />
                    </div>
                    <div class="col-sm-4 col-md-4 mt-2">
                        <div class="edu-name">University of Wisconsin - Green Bay</div>
                        <div> Sept 2018 -  May 2020</div>
                        <div class="edu-desc"> Associate's Degree of Arts and Science</div>
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
                        <a class="links" href="https://github.com/gaja-project/gaja">github.com/gaja-project/gaja</a>
                        {/* <div class="work-links">https://mailchi.mp/f9063425d3aa/gaja</div> */}

                    </div>
                </div>
                <div class="work-desc col-12 pb-4">
                    An 8 week project in a team of 4 to research and pitch a software solution
                    for language learners. Performed market research, user journeys and viewed
                    analytics to determine the best solution.
                    Worked in a remote startup environment,
                    collaborating with team members across the US. 
                    Led, planned and developed a working software solution in a small time
                    frame while exceeding MVP standard of deliverables. Created a dual-subtitle
                    chrome extension that works on Netflix. 
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
                        <a class="links" href="https://github.com/OmniConnx/OmniConnx">github.com/OmniConnx/OmniConnx</a>
                    </div>
                </div>
                <div class="work-desc col-12 pb-3">
                    A 12 week project, out-of-class setting with a team of 10 to build a
                    web application for a client in the UK.
                    Created a social media application proof of concept and collaborated
                    with client to fufill requirement of
                    helping medical students reach out to professionals.
                    Planned, designed, problem solved, and implemented routes, schemas,
                    and OAuth for user security.
                </div>
                <div class="row edu p-2">
                    <div class="col-sm-6 col-md-6">
                        <div class="work-name">Hoya</div>
                        <div class="edu-desc">Frontend Developer</div>
                        <div class="work-links">Python, Flask, MongoDB, Tensorflow.</div>
                        <a class="links" href="https://github.com/TheVille415/spd_housing">github.com/TheVille415/spd_housing</a>
                    </div>
                </div>
                <div class="work-desc col-12 pb-3">
                    An 8 week project in a team of 5 to solve housing selling and buying issues.
                    Created a web application that can find houses and give you an estimate
                    on the value of your house using machine learning.
                    As a lead frontend developer, worked on UI/UX concepts and applied simple and easy-to-use
                    UI and features.
                </div>
                <div class="row edu p-2">
                    <div class="col-sm-6 col-md-6">
                        <div class="work-name">Everything Weather</div>
                        <div class="edu-desc">Software Developer</div>
                        <div class="work-links">Javascript, React.js, D3.js.</div>
                        <a class="links" href="https://github.com/jsm-txt/Everything_Weather">github.com/jsm-txt/Everything_Weather</a>
                    </div>
                </div>
                <div class="work-desc col-12 pb-3">
                    A weather application built with React that gives you weather
                    data for  daily and weekly forecasts. Implemented D3.js to create
                    a simple UI for convenience, interpretation, and readability of weather data.
                    Applied user tests, analytics, AB testing, and growth hacks to extend reachability to users.
                </div>
                <h4> Smaller projects</h4>
                <div class="row edu p-2 pb-3">
                    <div class=" col-sm-12 col-md-4 col-lg-4">
                        <div class="project-card h-100 p-3">
                            <div class="work-name">iOS Calculator App</div>
                            <div class="work-links">Swift</div>
                            <a class="links" href="https://github.com/jsm-txt/TipCalculatorApp">jsm-txt/TipCalculatorApp</a>
                            <div>I built an iOS calculator apps similar to the default one</div>
                        </div>
                    </div>
                    <div class=" col-sm-12 col-md-4 col-lg-4">
                        <div class="project-card h-100 p-3">
                            <div class="work-name">Eutheruem Contract</div>
                            <div class="work-links">Solidium</div>
                            <a class="links" href="https://github.com/jsm-txt/My_Dapp">jsm-txt/My_Dapp</a>
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
                    in a crowded warehouse environment. Machine pourhead operator responsible
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
                    Line cook responsible for preparing food for customers in a timely fashion.
                </div>
            </div>

            <hr class="col-6"></hr>
            <div class="container-fluid">
                <h3> Hobbies/ Freetime</h3>
                <div class="row edu p-2 pt-1">
                    <div class="col-sm-12 col-md-4 col-lg-4 ">
                        <img class="logo" src={coursera} alt="" />
                        <div class="edu-name p-1">Skill development</div>
                        <div>
                            I am currently enrolled in a Coursera DevOps Professional Certificate course
                            and working towards Azure Cloud Certification on Cloud Guru.
                        </div>

                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <img class="logo" src={computer} alt="" />
                        <div class="edu-name p-1">Working with computers</div>
                        <div>
                            I love working with computers. I currently run a
                            side hustle of fixing and building computers for people in my area.
                        </div>
                    </div>
                </div>
                <div class="row edu p-2 pb-4">
                    <div class="col-sm-12 col-md-4 col-lg-4 ">
                        <img class="logo" src={music} alt="" />
                        <div class="edu-name p-1">Music</div>
                        <div> 
                            I grew up playing violin and bass. Sometimes throughout the year I will go
                            play music with a group. Places I have played include churches, nursing homes 
                            and hospitals, just to name a few. 
                        </div>

                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <img class="logo" src={duolingo} alt="" />
                        <div class="edu-name p-1">Language Learning</div>
                        <div>
                            I was raised learning English and Spanish and it made me appreciate different cultures.
                            Because of that and my 4 years of french in high school, I've continued my pursuit in
                            becoming fluent and understanding more langugaes, such as French and Japanese with the help of Duolingo.
                        </div>
                    </div>
                </div>
            </div>


            <hr class="col-6"></hr>            
        </div>
        

    )
}

export default Portfolio
