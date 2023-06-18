import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Home = () => {
    return (
    <>
        <div className='home' id='home'>
            <main>
            <h1>TechStar</h1>
            <p>Solution to all you problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to the tech problems yo face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>
        <div className="home3" id="about">
            <div>

                <h2>Who we are?</h2>
                <p>
                    My name is Krishna Kumar Raut, and I am currently pursuing my studies in computer science engineering at VIT Vellore Campus. As a frontend developer, I have honed my skills in creating visually appealing and user-friendly interfaces. My programming knowledge allows me to tackle complex problems and find effective solutions.
                    TechStar is a cutting-edge web application designed to provide a comprehensive platform for tech enthusiasts. As a frontend developer, my focus was on creating a visually appealing and intuitive user interface. By implementing modern design principles and utilizing my knowledge of HTML, CSS, and JavaScript, I ensured a seamless and engaging user experience.
                    Moreover, my problem-solving abilities were put to the test in this project. I tackled complex challenges and devised efficient solutions, leveraging my deep understanding of data structures and algorithms. This enabled me to optimize the performance of the TechStar application and ensure smooth functionality.
                </p>
            </div>
        </div>
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s",}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                    </div>

                    <div style={{animationDelay:"0.5s",}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                    </div>

                    <div style={{animationDelay:"0.7s",}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                    </div>

                    <div style={{animationDelay:"1s",}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
    )
}

export default Home
