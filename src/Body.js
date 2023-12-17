import React from 'react'
import Header from './Header'
import erik_pc from './images/erik_pc.jpg';
import erik_pc2 from './images/erik_pc2.jpg';
import h_pc from './images/h_pc.jpg';
import h_pc2 from './images/h_pc2.jpg';

function Body() {

    function myFunction() {
        var x = document.getElementById("desc");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    return (
        <div class="body jcs">
            <Header />
            {/* <div class="container-fluid intro pt-3" >
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh"/>
                <div class="text-container col-6 mb-sm-12" >
                    <h2>We Do Tech</h2>
                    <p class="">
                        We love tech. From PCs, to Mobile! We can help you make your dream set ups or fix the technical issue you can seem to solve.
                    </p>
                </div>
            </div> */}

            <div class="container-fluid p-4">
                <div class="row">
                    <div class=" col-6 pt-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh" />
                    </div>
                    <div class="col-6 ">
                        <div class="horizontal-center">
                            <h2>We Do Tech</h2>
                            <p class="">
                                We love tech. From PCs, to Mobile! We can help you make your dream set ups or fix the technical issue you can seem to solve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="container-fluid center-pad mt-4 mb-4">

                <div class="container-header-wrap">
                    <div class="col-6 col-sm-5 container-header left"> What we do</div>
                </div>

                <div class="row justify-content-evenly">
                    <div class="col-10 col-md-8 col-lg-4 p-4">
                        <div class="c-body center h-100">
                            <h3 class="card-headers">Build</h3>
                            <p class="c-text ">
                                Want your dream PC? We will build a PC just for you!
                                We build many kinds of PCs and with our experience we can help
                                you find the best parts to make yours one of a kind,
                                tailored to your needs.
                                We make sure to fit all of your requirements for gaming, streaming or productivity,
                                all within your budget. Don't wait any further on that dream set up of yours.
                            </p>
                            <div class="card-footer"></div>
                        </div>

                    </div>
                    <div class="col-10 col-md-8 col-lg-4 p-4">

                        <div class="c-body center h-100">
                            <h3 class="card-headers">Repair</h3>
                            <p class="c-text">
                                We repair hardware and software problems! Having issues with hardware, games or programs?
                                Give us a call or a message and we'll investigate, troubleshoot your problems.
                                We'll help you get up and running in no time!
                                We also help with installation of hardware from SSDs, hardrives, GPU's and more!
                                We also do PC optimization and help with mobile devices as well.

                            </p>
                            <div class="card-footer"></div>
                        </div>

                    </div>
                    <div class="col-10 col-md-8 col-lg-4 p-4">
                        <div class="c-body center h-100">
                            <h3 class="card-headers">Questions?</h3>
                            <p class="c-text">
                                Not sure about a certain hardware or software product?
                                Trouble deciding what tech to buy? Don't know how a certain product works?
                                We will walk you throgh your options, issues and help you understand
                                whatever tech you want to use or buy.
                            </p>
                            <div class="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid p-4 mt-4 mb-4">
                <div class="container-header-wrap">
                    <div class="col-6 container-header center"> Our Builds</div>
                </div>
                <div class="row">
                    <div class="col-4 c-body center">
                        <div class="c-top"></div>
                        <img src={erik_pc} class="build-img center" alt="Computer" />
                        <div class="c-bottom"></div>
                    </div>
                    <div class="img-box-wrapper">
                        <div class="img-box center">
                            {/* <div class="img-header"></div> */}
                            <img src={erik_pc} class="build-img center" alt="Computer" />
                        </div>
                    </div>
                    <div class="img-title center"> PC</div>
                    <div class="img-b"><a href="javascript:void(0);" class="icon" onclick={myFunction()} alt="hello"></a></div>
                    <div class="img-desc" id="desc"> hello</div>
                </div>
                



                
                {/* <img src={erik_pc2} class="build-img image2" alt="Computer" /> */}
                {/* <img src={h_pc} class="build-img" alt="Computer" />
                <img src={h_pc2} class="build-img" alt="Computer" /> */}
            </div>


            <div class="container-fluid">
                <h2> Other</h2>
                <img />
                <img />
                <img />
            </div>

            {/* <div class="container-fluid pt-4" >
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

            <div class="container-fluid pt-4" >
                <div class="row big-card">
                    <h2 class="col-4">Other</h2>
                    <p class="col-5 p-4 description">
                        Not sure about a certain hardware or software product?
                        Trouble deciding what tech to buy? Don't know how a certain product works? 
                        We will walk you throgh your options, issues and help you understand whatever tech you want to use or buy.
                    </p>
                </div>   
            </div> */}
            <div class="container-fluid">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt=""></img>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt=""></img> */}

            </div>


        </div>
    )
}

export default Body