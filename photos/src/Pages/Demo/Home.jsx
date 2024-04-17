import React, { useEffect } from 'react';
import './ParallaxWebsite.css';
import mount1 from "../../Static/Images/mount1.png";
import mount2 from "../../Static/Images/mount2.png";
import leaf1 from "../../Static/Images/leaf1.png";
import leaf2 from "../../Static/Images/leaf2.png";
import bush1 from "../../Static/Images/bush1.png";
import bush2 from "../../Static/Images/bush2.png";
import { Link } from 'react-router-dom';


const Home = () => {
    useEffect(() => {
        const title = document.querySelector('.title');
        const leaf1 = document.querySelector('.leaf1');
        const leaf2 = document.querySelector('.leaf2');
        const bush2 = document.querySelector('.bush2');
        const mount1 = document.querySelector('.mount1');
        const mount2 = document.querySelector('.mount2');

        const handleScroll = () => {
            let value = window.scrollY;
            title.style.marginTop = value * 1.1 + 'px';
            leaf1.style.marginLeft = -value + 'px';
            leaf2.style.marginLeft = value + 'px';
            bush2.style.marginBottom = -value + 'px';
            mount1.style.marginBottom = -value * 1.1 + 'px';
            mount2.style.marginBottom = -value * 1.2 + 'px';
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div>
            <header>
                <h1>Logo</h1>
                <nav className='topnav' id='myTopnav'>
                    <Link to={`/`} className="active"><span>Home </span></Link>
                    <Link to={`/`}><span>About </span></Link>
                    <Link to={`/signin`}><span>Sign-In </span></Link>
                    <Link to={`/`}><span>Contact </span></Link>
                    <Link href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </Link>
                </nav>
            </header>

            <section className="home">
                <img src={mount2} alt="mount2" className="mount2" />
                <img src={mount1} alt="mount1" className="mount1" />
                <img src={bush2} alt="bush2" className="bush2" />

                <h1 className="title">Photos</h1>

                <img src={bush1} alt="bush1" className="bush1" />
                <img src={leaf2} alt="leaf2" className="leaf2" />
                <img src={leaf1} alt="leaf1" className="leaf1" />
            </section>

            <section className="about">
                <h1>Capturing Moments: A Journey Through Time</h1>
                <br />
                <p>
                    Welcome to our world of captured moments, where every image tells a story, and every frame holds a memory. Join us on a captivating journey through time as we showcase a diverse collection of photographs that celebrate life, beauty, and the richness of human experience. Together, let's celebrate the art of visual storytelling and honor the moments that make life truly extraordinary. Capturing moments. Inspiring dreams. Celebrating life. Welcome to our photo collection website. We hope you enjoy your stay.</p>
                <br />
                <p>Step into the wilderness and immerse yourself in the breathtaking beauty of nature. From towering mountains to serene lakes, lush forests to expansive deserts, our collection captures the awe-inspiring landscapes that have captivated explorers and adventurers for centuries. Experience the vibrant tapestry of cultures from around the globe through our lens. From bustling city streets to remote villages, from ancient traditions to modern innovations, our photographs offer a glimpse into the rich diversity of human civilization.</p>
                <br />
                <p> At the heart of our collection lies the human experience in all its complexity and splendor. From moments of joy and laughter to times of reflection and contemplation, our photographs capture the myriad emotions that define our shared humanity. Witness the resilience of the human spirit in the face of adversity, or feel the warmth of human connection in the simplest gestures of kindness. As curators of visual storytelling, we understand the power of photography to preserve memories and inspire dreams. Whether you're a seasoned traveler seeking inspiration for your next adventure or a dreamer longing to escape into a world of imagination, our collection offers something for everyone. Let our photographs ignite your sense of wonder, awaken your curiosity, and remind you of the beauty that surrounds us every day. We invite you to embark on this journey with us, where every click of the shutter captures a moment in time and every photograph tells a unique story. Explore our collection, lose yourself in the beauty of the world, and rediscover the magic of photography. </p>
            </section>
        </div>
    );
};

export default Home;
