import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import chat from "../../Images/chat.png"

function LeftSidebar() {
  return (
    <div className="main-subone">
    <div className="main-sub">
        <div className="left-sub-one"></div>
        <div className="left-sub-two"></div>
    </div>
    <div className="main-sub-three">

    </div>
    <div className="main-sub">
        <div className="left-sub-three">
            <h4 className="sidebar-head">Welcome Nikki Wolf!</h4>
            <img src={chat} alt="" className="chatlogo"/>
            <button className="left-btns"><span><FaUserFriends  className='user' /></span>Quick connect</button>
            <button className="left-btns"><span><TbGridDots className='dotsquare' /></span>Quick connect</button>
            <button className="left-btns"><span><MdTaskAlt  className='task'/></span>Create task</button>
            <button className="left-btns"><span><MdOutlineMail className='email-icon'/></span>Compose email</button>
        </div>
        <div className="left-sub-four"></div>
    </div>
</div>
  )
}

export default LeftSidebar
