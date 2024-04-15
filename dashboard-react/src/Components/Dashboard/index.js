import React from 'react'
import "./Style.css"
import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import Rightsidebar from './Rightsidebar'
import Verticalicons from './Verticalicons'
import Search from './Search'
import Customerprofile from './Customerprofile'
import { Route, Routes } from "react-router-dom";
import Case from './Case'

function Dashboard() {
  return (
   <>
   <Navbar/>
   <div className="main-container">
    <LeftSidebar/>
    <div className="main-subtwo">
    <Rightsidebar/>
    <div className="individuals">
        <div className="vertical-icons">
        <Verticalicons/>
        </div>
    <div>
    <Routes>
              <Route path="/" exact element={<Customerprofile />} />
              <Route path='team' element={<Search/>}/>
              <Route path='case' element={<Case/>}/>
              
              
    </Routes>
    </div>
    </div>
    </div>
    </div>
   </>
  )
}

export default Dashboard
