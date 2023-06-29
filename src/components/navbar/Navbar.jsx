import React, { useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits,MdMiscellaneousServices } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";




const Navbar = () => {
const [mobileView, setMobileView]=useState(false)

  const menuItems = [
    {
      icon: <FaHome />,
      path: "/",
      display: "Home",
    },
    {
      icon: <MdProductionQuantityLimits/>,
      path: '/product',
      display: "Product",
    },
    
    {
      icon: <FaShoppingCart/>,
      path: "./cart",
      display: "Cart",
    },
    {
      icon: <MdMiscellaneousServices/>,
      path: "./service",
      display: "Service",
    },
  ];

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img
          src="https://www.chowbus.com/services/service-type-grocery.png"
          alt="logoImg"
        />
        <h1>Blinkit</h1>
      </div>
      
      <div className={mobileView? style.responsive : style.nav_menu} onClick={()=>setMobileView(false)}>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "600",
              color: isActive ? "lightgreen" : "green",
            })}
            to={item.path}
          >
            <span className={style.nav_icons}>{item.icon}</span>
            {item.display}
          </NavLink>
        ))}
      </div>
      <div  className={style.user}>
        <NavLink to="/login">
          <motion.img
            whileTap={{ scale: 1.2 }}
            className={style.profile}
            src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
            alt="profile"
          />
        </NavLink>
        
        <button className={style.hamburger} onClick={() => setMobileView(!mobileView)}>
          {mobileView? <ImCross /> : <FaBars />}
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;

