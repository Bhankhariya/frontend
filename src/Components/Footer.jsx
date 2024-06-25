import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return ( 
        <>
        <footer>
        <div class="col">
            <img class="logo-footer" src="Images/logoats.png" alt="" />
            <h4>Contact</h4>
            <p><strong>Address: </strong> Ahmedabad</p>
            <p><strong>Phone: </strong> 1234567890</p>
            <p><strong>Hours: </strong> 24/7 Connect</p>
            {/* <!-- <div class="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <i>F T I Y</i>
                </div>
            </div> --> */}
        </div>

        <div class="col">
            <h4>About</h4>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="#">Delivery Information</NavLink>
            <NavLink to="#">Privacy Policy</NavLink>
            <NavLink to="#">Terms & Conditions</NavLink>
            <NavLink to="/Contact">Contact Us</NavLink>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <NavLink to="/Login">Log In</NavLink>
            <NavLink to="/Register">Sign In</NavLink>
            {/* <!-- <NavLink to="#">View Cart</NavLink>
            <NavLink to="#">My Wishlists</NavLink>
            <NavLink to="#">Track My Orders</NavLink> --> */}
            <NavLink to="#">Help</NavLink>
        </div>

        {/* <!-- <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <img src="images/Footer/app.jpg" alt="">
                <img src="images/Footer/play.jpg" alt="">
            </div>
            <p>Secured Payment Gateways</p>
            <img src="images/Footer/pay.png" alt="">
        </div> --> */}
        <div class="copyright">
            <p>@ 2024, Aunty's tiffin service - Copyright section</p>
        </div>
    </footer>
        </>
     );
}

export default Footer;