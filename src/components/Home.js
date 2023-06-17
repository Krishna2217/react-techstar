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

                <h1>Who we are</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae perferendis pariatur voluptates numquam atque placeat quasi cum quis quaerat cupiditate maiores consequuntur! Dolorem totam nesciunt eaque perspiciatis rerum ab sequi consequuntur asperiores cumque, quisquam quis? Quasi modi sunt nihil aut quaerat. Expedita provident eligendi reiciendis et accusantium pariatur reprehenderit obcaecati voluptates, eveniet rerum laboriosam, nostrum beatae, qui molestias ducimus vel. Qui enim itaque voluptates id quam earum nobis quae, vitae aliquid odio tenetur minima quos. Ex corrupti tempora cum, neque amet asperiores, itaque illum, facilis temporibus beatae animi repudiandae atque nam vitae dolore. Ratione ex similique nemo rem quos?
                </p>
            </div>
        </div>
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                    </div>

                    <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                    </div>

                    <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                    </div>

                    <div style={{animationDelay:"0.1s"}}>
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
