import React, { useRef, useState, useContext } from "react";
import "./Navbar.css";
import { TbBrandRedux } from "react-icons/tb";

import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";

import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const profileRef = useRef();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
          className="nav-logo"
        >
          <div className="nav-logo-img">
            <TbBrandRedux />
          </div>
          <p style={{ letterSpacing: "1px" }}>Redux</p>
        </Link>
        <div>
          <IoIosArrowDropdown
            onClick={dropdown_toggle}
            className="nav-dropdown nav-dorpdown-icon"
          />
        </div>

        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            
            <Link to="/home">Home</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("about");
            }}
          >
            <Link to="/about">About</Link>
            {menu === "livingroom" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Service");
            }}
          >
            <Link to="Service">Service</Link>
            {menu === "Service" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Contact");
            }}
          >
            <Link to="Contact">Contact</Link>
            {menu === "Contact" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Info");
            }}
          >
            <Link to="Info">Info</Link>
            {menu === "Info" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">

            <>

              <Link className="cart-icon" to="/cart">
                <IoCartOutline />
              </Link>
              <div className="nav-cart-count">0</div>
            </>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
