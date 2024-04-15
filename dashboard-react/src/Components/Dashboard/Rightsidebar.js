import React from 'react'
import { FaHome,FaUsers ,FaUser } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { Link } from 'react-router-dom';

function Rightsidebar() {
  return (
   
        <div className="main-subtwo-header">
                    <div><FaHome /></div>
                    <div className="pipe">|</div>
                    <Link to="/" className='link'>
                    <div className="header-sub">
                        <div><FaUser /></div>
                        <div>Customer Profile</div>
                    </div>
                    </Link>
                    <div  className="pipe">|</div>
                   <Link to="/case" className='link'>
                   <div className="header-sub">
                        <div><IoMdBriefcase /></div>
                        <div>Case</div>
                    </div>
                   </Link>
                    <div  className="pipe">|</div>
                    <Link to="/team" className='link'>
                    <div className="header-sub">
                      
                       <div><FaUsers /></div>
                        <div>Teams</div>
                      
                    </div>
                    </Link>
                    <div  className="pipe">|</div>
                </div>
   
  )
}

export default Rightsidebar
