import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return ( 
        <>
        <Navbar />
            <section id="about-header">
        <h2>" Taste the goodness, delivered daily. "</h2>
        <p>From our kitchen to your doorstep, a taste of homemade happiness.</p>
    </section>

    <section id="sec-data">
        <div class="sec-container">
            <div class="con-photo">
                <img src="Images/auntyphoto.png" alt="" />
            </div>
            <div class="con-text">
                <p>Welcome to Aunty's Tiffin Service, where homemade goodness meets convenience. At Aunty's, we understand the hustle and bustle of modern life, and we're here to provide you with delicious, wholesome meals delivered right to your doorstep.
                    Our journey began with a passion for cooking and a desire to share the flavors of home-cooked meals with others. Aunty's Tiffin Service is a labor of love, rooted in tradition and crafted with care.
                    What sets us apart is our commitment to quality and authenticity. Each dish is prepared using the freshest ingredients, sourced locally whenever possible. Our recipes are passed down through generations, ensuring that every bite is filled with the warmth and nostalgia of homemade cooking.
                    Beyond the food, we prioritize customer satisfaction and convenience. Our reliable delivery service ensures that your meals arrive promptly and piping hot, ready to be enjoyed wherever you are. With Aunty's Tiffin Service, you can say goodbye to meal prep stress and hello to more time for the things that matter most.
                    Thank you for choosing Aunty's Tiffin Service to nourish your body and soul. We look forward to serving you with love and flavor, one meal at a time.</p>
            </div>
        </div>

        <div class="sec-container">
            <div class="con-photo">
                <img src="Images/logoats.png" alt="" class="img2"/>
            </div>
            <div class="con-text">
                <p>The "Aunty's Tiffin Service" logo represents a savory blend of tradition and taste, echoing the warmth and flavors of home-cooked meals delivered straight to your doorstep. With its comforting hues and inviting design, our logo embodies the essence of familial care and culinary delight, inviting you to experience the homemade goodness that defines our service.</p>
            </div>
        </div>
    </section>
    <Footer />
        </>
     );
}

export default About;