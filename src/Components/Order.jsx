import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  mealtype: "",
  number: "",
  address: "",
  special: "",
};

export const Order = () => {
  const [order, setOrder] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setOrder({
      username: user.username,
      email: user.email,
      mealtype: user.mealtype,
      number: user.number,
      address: user.address,
      special: user.special,
    });
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOrder({
      ...order,
      [name]: value,
    });

    setUserData(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://backend-coral-phi.vercel.app/api/form/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setOrder(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Order send successfully");
      }
    } catch (error) {
      toast.error("message not send");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section id="orderPart">
        <h2>Place Your Tiffin Order</h2>

        <form
          id="orderForm"
          // action="http://localhost:8560/ldorder"
          // method="post"
          onSubmit={handleSubmit}
        >
          <label for="name">Your Name:</label>
          <input
            className="inputsize"
            type="text"
            id="name"
            name="username"
            value={order.username}
            onChange={handleInput}
            placeholder="Username"
            required
          />

          <label for="email">Your Email:</label>
          <input
            className="inputsize"
            type="email"
            id="email"
            name="email"
            value={order.email}
            onChange={handleInput}
            placeholder="Email"
            required
          />

          <label for="mealType">Select Meal Type:</label>
          <div className="hello">
            <select
              className="inputsize2"
              id="mealType"
              name="mealtype"
              value={order.mealtype}
              onChange={handleInput}
              required
            >
              <option value="x">Select</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>

            <input
              className="inputsize2"
              type="number"
              id="number"
              name="number"
              min={1}
              max={50}
              value={order.number}
              onChange={handleInput}
              placeholder="number of tiffin"
              required
            />
          </div>

          <label for="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={order.address}
            onChange={handleInput}
            rows="2"
            placeholder="Enter your address"
          ></textarea>

          <label for="specialInstructions">Special Instructions:</label>
          <textarea
            id="specialInstructions"
            name="special"
            value={order.special}
            onChange={handleInput}
            rows="3"
            placeholder="Any Special Instruction"
          ></textarea>

          <div>
            <input type="submit" className="button" value="Submit Order" />
            <Link id="ocalink" to="/Ocational">
              Ocational Order
            </Link>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Order;
