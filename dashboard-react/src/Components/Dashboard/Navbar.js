import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { FaFileAlt,FaSearch,FaChevronDown  } from "react-icons/fa";
import logo from "../../Images/thunderlogo.png"
function Navbar() {
  return (
    <div className="navbar">
            <div className="navbar-sub-one">
                 <div><img src={logo} alt="" className="logo"/></div>
                 <div className="sel-div">
                   <div> <select name="" id="" className="sel-box" >
                    <option value="On teams">On Teams</option>
                    
                    </select></div>
                    <div><FaChevronDown className='downarrow' /></div>
                </div>
                 <div  ><FaPlus className='nav-icons' /></div>
                 <div className=" pipe-line">|</div>
                 <div ><MdOutlineSettings className='nav-icons'  /></div>
                 <div className=" pipe-line">|</div>
                 <div >  <FaFileAlt  className='nav-icons-file'/></div>
                 <div className="pipe-line">|</div>
            </div>
            <div className="navbar-sub-two">
                <div  ><FaSearch  className='search-iconn'/></div>
                <div className="search-div"><input type="text" name="" id=""  className="search-inp" placeholder="search"/></div>
            </div>
       </div>

  )
}

export default Navbar
