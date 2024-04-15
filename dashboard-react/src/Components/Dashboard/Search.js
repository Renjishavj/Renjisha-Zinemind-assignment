import React, { useEffect,useState } from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { FaSearch,FaCaretLeft,FaCaretRight,FaSortDown , FaHeart } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import  user from '../../Data/User.json'
import { TiTick } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { LuClock2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";

function Search() {
    
    console.log(user.user)

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = user.user.slice(firstIndex, lastIndex);
    const npage = Math.ceil(user.user.length / recordsPerPage)
    const numbers = [...Array(npage+1).keys()].slice(1)
    const [isFavourite, setIsFavourite] = useState(true);


     
    const prePage =()=>{
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage=()=>{
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
    const changeCPage =(id)=>{
       setCurrentPage(id)
    }

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

     
  return (

    
    <div className="each-sections">
                        <div className="section-head">
                            <div><h2 className="search">Search</h2></div>
                            <div className="section-head-btns">
                                <div><button className="msg-btn">

                                    <div>
                                    <IoChatbubbleEllipsesOutline  className='comment'/>
                                    </div>
                                     <div>Chat</div></button>
                                     </div>
                                <div><button className="call-btn"><div><MdAddIcCall className='phone'/></div><div>Call</div></button></div>
                                <div className="pipe">|</div>
                                <div><FaRegHeart className='wishlist'/></div>
                                <div><IoMdRefresh className='refresh' /></div>
                            </div>
                        </div>
                        <p className="user-strength">Found 7,876 Users</p>
                        <div className="search-userdiv">
                            <div className="search-user">
                                <div ><FaSearch className='searchingg'/></div>
                                <div className="search-div"><input type="text" name="" id=""  className="input-search" placeholder="search"/></div>
                            </div>
                            <div className="count-slider">
                                <div><button onClick={prePage} className='side-btn'><FaCaretLeft  className='side-arrow'/></button></div>
                                
                                    {
                                        numbers.map((n,i)=>(
                                            <button className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                           <a href ="#" onClick={()=>changeCPage(n)} className='page-link'>{n}</a></button>
                                        ))
                                    }


                                <div><button onClick={nextPage} className='side-btn'><FaCaretRight  className='side-arrow'/></button></div>
                                <div className="pipe">|</div>
                                <div><IoSettings className='settings'/></div>
                            </div>
                        </div>

                        
                        <div className="user-table">

                            <table className="table-contents">
                                <tbody>
                                <tr>
                                    <th>
                                        <label className="container">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                          </label>
                                    </th>
                                    <th>Name <span><FaSortDown className='arrowdown'/></span><span className="pipe">|</span></th>
                                    <th>Status <span><FaSortDown className='arrowdown'/></span><span  className="pipe">|</span></th>
                                    <th>Phone Number <span><FaSortDown className='arrowdown'/></span><span  className="pipe">|</span></th>
                                    <th>Email Id <span><FaSortDown className='arrowdown'/></span><span  className="pipe">|</span></th>
                                    <th>Favourite <span><FaSortDown className='arrowdown'/></span></th>
                                </tr>
                                {records.map((user,index)=>(
                                    <tr key={index}>
                                        
                                         <td>
                                        <label className="container">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                          </label>
                                    </td>
                                        <td>{user.name}</td>
                                        <td>
                                            {user.Status === "Available" ? (
                                                <span className="available"><TiTick /></span>
                                            ) :user.Status==="Offline" ?(
                                                <span className="appear-offline"><IoClose /></span>
                                            ):user.Status==="Will be right back" ?(
                                                <span className="right-back"><LuClock2 /></span>
                                            ):user.Status==="Do not disturb" ?(
                                                <span className="disturb"><TiMinus /></span>
                                            ):user.Status==="Appear away" ?(
                                                <span className="appear-away"><CiClock1 /></span>
                                            )
                                            : user.Status === "Busy" ? (
                                                <span className="busy"></span>
                                            ) : null}
                                            {user.Status}   
                                            </td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {isFavourite === false ? (
                                                <button className='toggle-fav' onClick={toggleFavourite}>
                                                    <FaHeart className='favv' />
                                                </button>
                                            ) : (
                                                <button className='toggle-fav' onClick={toggleFavourite}>
                                                    <FaHeart className='fav' />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                               
                                </tbody>
                            </table>
                            <div><button className="viewall" >View All</button></div>
                        </div>
                    </div>
                
  )
}

export default Search
