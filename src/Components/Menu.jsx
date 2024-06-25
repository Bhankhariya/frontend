import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Menu() {
    const {isLoggedIn} = useAuth();

    const handleOrderClick = () =>{
        if(isLoggedIn){
            window.location.href='/Order';
        }else{
            toast.error("Order unlocked after login access.");
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

            
           <section id="page-header">
        <h2><span>#taste</span> <span>#convenience</span> <span>#satisfaction</span> <span>#guaranteed</span> </h2>
        <p>From our kitchen to your doorstep, a taste of homemade happiness.</p>
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
                <li><strong>In Meal:</strong> Shabji, Roti, Jeera Rice, Dal Fry, Papad</li>
            </ul>
            <Link id="lunch-order" onClick={handleOrderClick}> Order Now </Link>
        </div>
        <div class="fe-box">
            <h6>Dinner</h6>
            <ul>
                <li><strong>Order Timing:</strong> 10:30 PM to 6:00 PM</li>
                <li><strong>Delivery Timing:</strong> 8:30 - 9:30 PM</li>
                <li><strong>In Meal:</strong> Shabji, Roti, Jeera Rice, Dal Fry, Sweet</li>
            </ul>
            <Link id="lunch-order" onClick={handleOrderClick}> Order Now </Link>
        </div>
        <div class="fe-box">
            <h6>Ocational Order</h6>
            <ul>
                <li><strong>Capacity</strong> upto 100 Members</li>
                <li><strong>Delivery Timing:</strong> 24/7 </li>
                <li><strong>In Meal:</strong> Your can ask we made it.</li>
            </ul>
            <Link id="lunch-order" onClick={handleOcationalClick}> Order Now </Link>
        </div>
    </section>


    <section id="menu-table">
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Lunch</th>
                    <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span>Sunday</span></td>
                    <td>Weekend Special</td>
                    <td>Weekend Special</td>
                </tr>
                <tr>
                    <td><span>Monday</span></td>
                    <td>Chana Masala with Naan</td>
                    <td>Vegetable Curry with Roti</td>
                </tr>
                <tr>
                    <td><span>Tuesday</span></td>
                    <td>Chhole with Culche</td>
                    <td>Paneer Masala</td>
                </tr>
                <tr>
                    <td><span>Wednesday</span></td>
                    <td>Mug</td>
                    <td>Veg. Sabzi</td>
                </tr>
                <tr>
                    <td><span>Thursday</span></td>
                    <td>Rajma</td>
                    <td>Mixed Vegetable Sabzi with Rice</td>
                </tr>
                <tr>
                    <td><span>Friday</span></td>
                    <td>Chole Bhature</td>
                    <td>Methi Aalu with Paratha</td>
                </tr>
                <tr>
                    <td><span>Saturday</span></td>
                    <td>Weekend Special</td>
                    <td>Weekend Special</td>
                </tr>
            </tbody>
        </table>
    
    </section>




    <Footer />
        </>
     );
}

export default Menu;