import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",  
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"   
  },  
   {
  title: "Technologies",
  path: "/technologies",
  icon: <FaIcons.FaRocket />,
  cName: "nav-text"
},  
  {   
    title: "Members",         
    path: "/members",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"   
 },
 {
    title: "Contact",   
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"       
 },

]