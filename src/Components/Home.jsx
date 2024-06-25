import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Home() {
    const {isLoggedIn} = useAuth();

    const handleOrderClick = () =>{
        if(isLoggedIn){
            window.location.href='/Order';
        }else{
            toast.error("Order unlocked after login access.");
            // alert("Order unlocked after login access.");
        }
    };
    const handleOcationalClick = () =>{
        if(isLoggedIn){
            window.location.href='/Ocational';
        }else{
            toast.error("Ocational order unlocked after login access.");
        }
    };

    return (
        <>
            <Navbar />
            <section id="main">
                <div class="parts">
                    <div class="part-text">
                        <h1>Aunty's tiffin service</h1>
                        <h2>Don't worry..!!</h2>
                        <p>We manage your lunch and dinner.</p>
                        <Link id="order-button" onClick={handleOrderClick}>Order Now</Link>
                    </div>
                    <div class="part-picture">
                        <img src="Images/dibba.webp" alt="" />
                    </div>
                </div>
            </section>

            <section id="slok">
                <p>ॐ ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।
                    ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्म समाधिना।।</p>
            </section>

            <section id="feature">
                <div class="fe-box">
                    <img src="Images/22222.jpg" alt="" />
                    <h6>Lunch / Dinner</h6>
                </div>
                <div class="fe-box">
                    <img src="Images/22222.jpg" alt="" />
                    <h6>Online Order</h6>
                </div>
                <div class="fe-box">
                    <img src="Images/dddd.jpg" alt="" />
                    <h6>Menu</h6>
                </div>
                <div class="fe-box">
                    <img src="Images/f2.png" alt="" />
                    <h6>Free Delivery</h6>
                </div>
                <div class="fe-box">
                    <img src="Images/f6.png" alt="" />
                    <h6>24/7 Support</h6>
                </div>
            </section>

            <section id="menucategories">
                <h1>" Categories "</h1>
            </section>

            <section id="order-detail">
                <div class="fe-box">
                    <h6>Lunch</h6>
                    <ul>
                        <li><strong>Order Timing:</strong> 2:00 PM to 9:30 AM</li>
                        <li><strong>Delivery Timing:</strong> 12:00 - 01:00 PM</li>
                        {/* <!-- <li><strong>In Meal:</strong> Shabji, Roti, Jeera Rice, Dal Fry, Papad</li> --> */}
                    </ul>
                    <Link id="lunch-order" onClick={handleOrderClick}> Order Now </Link>
                </div>
                <div class="fe-box">
                    <h6>Dinner</h6>
                    <ul>
                        <li><strong>Order Timing:</strong> 10:30 PM to 6:00 PM</li>
                        <li><strong>Delivery Timing:</strong> 8:30 - 9:30 PM</li>
                        {/* <!-- <li><strong>In Meal:</strong> Shabji, Roti, Kadhi, Khichadi, Sweet</li> --> */}
                    </ul>
                    <Link id="dinner-order" onClick={handleOrderClick}> Order Now </Link>
                </div>
                <div class="fe-box">
                    <h6>Ocational Order</h6>
                    <ul>
                        <li><strong>Capacity:</strong> Upto 100 Members</li>
                        {/* <!-- <li><strong>Delivery Timing:</strong> 8:30 - 9:30 PM</li> --> */}
                        <li><strong>In Meal:</strong> Your can ask we made it.</li>
                    </ul>
                    <Link id="oca-order" onClick={handleOcationalClick}> Order Now </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;