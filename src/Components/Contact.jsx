import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: " ",
    });
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

    setUserData(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://backend-coral-phi.vercel.app/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Your flavor wave send successfully....");
      }
    } catch (error) {
      alert("message not send");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section id="con-header">
        <h2>
          <span>HELP</span> <span>US</span> <span>IMPROVE</span>
        </h2>
      </section>

      <div className="contactback">
        <div id="contactcontainer">
          <form
            id="contactform"
            // method="post"
            // action="http://localhost:8560/contact"
            onSubmit={handleSubmit}
          >
            <label for="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              value={contact.username}
              onChange={handleInput}
              required
            />

            <label for="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleInput}
              required
            />

            <label for="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={contact.message}
              onChange={handleInput}
              required
            ></textarea>

            <input type="submit" value="Send Flavor Waves"></input>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
