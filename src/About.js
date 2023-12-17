import React from 'react'
import Header from './Header'
import image from './pfp.jpg'
function About() {
    return (
        <div>
            <Header />
            <div class="container-fluid about">
                <img src={image} class="about-pic" alt="Canyon at Nigh"></img>
                <h2>My Story</h2>
                <p class="col-10 horizontal-center">
                    I love doing many things, from working with and on computers and
                    making the best gaming set ups! I do everything with passion and
                    research the lastest and greatest things to hit the market. I investigate
                    the best deals so I can not only help myself, but help those who don't know
                    where to start. A few years ago, I started helping my classmates start their
                    adventure into tech, I helped build their dream machines and assit them with
                    peripherals and software that would help them get up and running. Thats when
                    I realized this could be a buisness, especially to help those who struggled
                    with language barriers as well. It's been awhile since then but I couldn't
                    be any more happier knowing that I've been able to help people get their
                    dream machine at an afforadable price and for them to know that I can answer
                    their questions. All I want is for people know that help is out there,
                    they don't need to know everything about tech for them to get what they
                    want from their PCs, they can just give me a call.
                </p>
            </div>
        </div>

  )
}

export default About