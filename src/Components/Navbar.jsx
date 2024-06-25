import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <section id="header">
      <div className="logo">
        <img src="Images/logoats.png" alt="" />
      </div>
      <div id="navhide" className={showMediaIcons ? "openslide" : "closeslide"}>
        <Link
          id="menuclose"
          className="closeclick"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          X
        </Link>
        <NavLink exact className="Link-size" to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink className="Link-size" to="/Menu" activeClassName="active">
          Menu
        </NavLink>
        <NavLink className="Link-size" to="/About" activeClassName="active">
          About
        </NavLink>
        <NavLink className="Link-size" to="/Contact" activeClassName="active">
          Contact
        </NavLink>

        {isLoggedIn ? (
          <>
            
            <NavLink className="Link-size Link-sr2" to="/Logout">
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="Link-size Link-sr" to="/Login">
              Login
            </NavLink>
            <NavLink className="Link-size Link-sr2" to="/Register">
              Register
            </NavLink>
          </>
        )}
      </div>
      <div id="tablet">
        <Link
          id="menu"
          className="Link-size click"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          Menu
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
