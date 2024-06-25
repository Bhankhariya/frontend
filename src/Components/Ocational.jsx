import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  phone: "",
  date: "",
  guest: "",
  address: "",
  detail: "",
};

export const Ocational = () => {
  const [ocational, setOcational] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setOcational({
      username: user.username,
      email: user.email,
      phone: user.phone,
      date: user.date,
      guest: user.guest,
      address: user.address,
      detail: user.detail,
    });
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOcational({
      ...ocational,
      [name]: value,
    });

    setUserData(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://backend-coral-phi.vercel.app/api/form/ocational`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ocational),
      });

      if (response.ok) {
        setOcational(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Ocational order send successfully");
      }
    } catch (error) {
      toast.error("message not send");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section id="ocational">
        <div id="ocacontainer">
          <h2>Occasional Order Form</h2>
          <form
            //  action="http://localhost:8560/oca" method="post"
            onSubmit={handleSubmit}
          >
            <label for="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              value={ocational.username}
              onChange={handleInput}
              placeholder="Username"
              required
            />
            <label for="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={ocational.email}
              onChange={handleInput}
              placeholder="Email"
              required
            />
            <label for="phone">Your Phone Number:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={ocational.phone}
              onChange={handleInput}
              placeholder="Enter your phone number"
              required
            />
            <label for="date">Date of Occasion:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={ocational.date}
              onChange={handleInput}
              placeholder="Enter your date of receive order"
              required
            />
            <label for="guests">Number of Guests (Max 100):</label>
            <input
              type="number"
              id="guests"
              name="guest"
              value={ocational.guest}
              onChange={handleInput}
              placeholder="Enter number of guests"
              min="1"
              max="100"
              required
            />
            <label for="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={ocational.address}
              onChange={handleInput}
              placeholder="Enter address"
              rows="2"
            ></textarea>
            <label for="details">Additional Details:</label>
            <textarea
              id="details"
              name="detail"
              value={ocational.detail}
              onChange={handleInput}
              placeholder="Any additional detail"
              rows="3"
            ></textarea>
            <div>
              <input type="submit" value="Submit Order" />
              <Link id="ocaldlink" to="/Order">
                Lunch/Dinner
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ocational;
