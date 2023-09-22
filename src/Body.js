import React from 'react'

import instagram from './instagram.png';
import linkedin from './linkedin.png';

function Body() {
    return (
        <div>
            <div class="container-fluid intro" >
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh"/>
                <div class="text-container col-6 mb-sm-12" >
                    <h2>We Do Tech</h2>
                    <p class="">
                        We love tech. From PCs, to Mobile! We can help you make your dream set ups or fix the technical issue you can seem to solve.
                    </p>
                </div>
            </div>
            
            
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h3>Build</h3><hr></hr>
                                <p>Want to build a PC but don't know where to start? Reach out and we'll help you find the best PC for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card h-100 ">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="" class="card-img-top"></img>
                            <div class="card-body">
                                <h3>Repair</h3><hr></hr>
                                <p>Have trouble with you PC or set up? Reach out and we'll come to you and fix your tech problems.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
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
           


            <div class="container-fluid" >
                <h2>Build</h2>
                <p class="">
                    Want your dream PC? We will build it for you! We'll help you find the best parts for YOU.
                    We build PCs for streamers, gamers or a casual users, we will make sure to fit all of your requirements and budget.
                </p>
            </div>
            <div class="container-fluid" >
                <h2>Repair</h2>
                <p class="">
                    We repair hardware and software problems! We also help with installation of hardware from SSDs, hardrives, GPU's and more! 
                    We can help with software problems as well, and PC optimization.
                </p>
            </div>
            <div class="container-fluid">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt=""></img>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt=""></img> */}

            </div>
            
            <div class="container-fluid" >
                <h3 class="display-4"> Let's get in touch!</h3>
                <p>Follow my social to view posts, content and updates!</p>
                {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="./facebook.png" alt="facebook"></img></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="./instagram.png" alt="instagram"></img></a> */}
                <div class="">
                    <a class="m-1" href="https://www.google.com/" target="_blank" rel="noreferrer"><img class="social-media-icon" src={instagram} alt="linkedin"></img></a>
                    <a class="m-1" href="https://www.google.com/" target="_blank" rel="noreferrer"><img class="social-media-icon" src={linkedin} alt="linkedin"></img></a>
                </div>
            </div>
            <div class="footer container-fluid m-5">
            </div>

        </div>
    )
}

export default Body