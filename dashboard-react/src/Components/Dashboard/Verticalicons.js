import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch ,FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

function Verticalicons() {
  return (
<>
<div className="vertical-icon-div"><GiHamburgerMenu /></div>
                        <div className="vertical-icon-div"><FaSearch /></div>
                        <div className="vertical-icon-div"><FaUser /></div>
                        <div className="vertical-icon-div"><IoSettings /></div>
</>
                   
    
  )
}

export default Verticalicons
