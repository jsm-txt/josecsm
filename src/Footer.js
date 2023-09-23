import React from 'react';
import instagram from './instagram.png'
import linkedin from './linkedin.png'


function Footer() {
    return (
        <div class="container-fluid pt-4 pb-5" >
            <h3 class="display-4"> Let's get in touch!</h3>
            <p>Follow my social to view posts, content and updates!</p>
            <div class="">
                <a class="m-1" href="https://www.google.com/" target="_blank" rel="noreferrer"><img class="social-media-icon" src={instagram} alt="linkedin"></img></a>
                <a class="m-1" href="https://www.google.com/" target="_blank" rel="noreferrer"><img class="social-media-icon" src={linkedin} alt="linkedin"></img></a>
            </div>
        </div>

    )
}
export default Footer