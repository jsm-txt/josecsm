import React from 'react'

import instagram from './instagram.png';
import linkedin from './linkedin.png';

function Body() {
    return (
        <div class="body">
            <div class="container-fluid intro pt-3" >
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh"/>
                <div class="text-container col-6 mb-sm-12" >
                    <h2>We Do Tech</h2>
                    <p class="">
                        We love tech. From PCs, to Mobile! We can help you make your dream set ups or fix the technical issue you can seem to solve.
                    </p>
                </div>
            </div>
            
            
            <div class="container-fluid p-4">
                <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0 pt-2 ">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h3>Build</h3><hr></hr>
                                <p>Want to build a PC but don't know where to start? Reach out and we'll help you find the best PC for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0 pt-2">
                        <div class="card h-100 ">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="" class="card-img-top"></img>
                            <div class="card-body">
                                <h3>Repair</h3><hr></hr>
                                <p>Have trouble with you PC or set up? Reach out and we'll come to you and fix your tech problems.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0 pt-2 ">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="" class="card-img-top"></img>
                            <div class="card-body">
                                <h3>Questions?</h3><hr></hr>
                                <p>We solve problems! Contact us for any tech or pricing questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <h2>Our Builds</h2>
                <img/>
                <img/>
                <img/>

            </div>
            <div class="container-fluid pt-4" >
                <div class="row big-card">
                <h2 class="col-4">Build</h2>
                <p class="col-5 p-4 description">
                    Want your dream PC? We will build a PC just for you!
                    We build many kinds of PCs and with our experience we can help 
                    you find the best parts to make yours one of a kind, 
                    tailored to your needs.
                    We make sure to fit all of your requirements for gaming, streaming or productivity,
                    all within your budget. Don't wait any further on that dream set up of yours.
                </p>
                </div>
                
            </div>
            <div class="container-fluid pt-4" >
            <div class="row big-card">
            <h2 class="col-4">Repair</h2>
            <p class="col-5 p-4 description">
                    We repair hardware and software problems! Having issues with hardware, games or programs?
                    Give us a call or a message and we'll investigate, troubleshoot your problems.
                    We'll help you get up and running in no time!
                    We also help with installation of hardware from SSDs, hardrives, GPU's and more! 
                    We also do PC optimization and help with mobile devices as well.
                </p>
                
            </div>   
            </div>
            <div class="container-fluid">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt=""></img>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt=""></img> */}

            </div>
            
            <div class="container-fluid pt-4 pb-5" >
                <h3 class="display-4"> Let's get in touch!</h3>
                <p>Follow my social to view posts, content and updates!</p>
                {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="./facebook.png" alt="facebook"></img></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="./instagram.png" alt="instagram"></img></a> */}
                <div class="">
                    <a class="m-1" href="https://www.google.com/" target="_blank" rel="noreferrer"><img class="social-media-icon" src={instagram} alt="linkedin"></img></a>
                    <a class="m-1" href="https://www.google.com/" target="_blank" rel="noreferrer"><img class="social-media-icon" src={linkedin} alt="linkedin"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Body