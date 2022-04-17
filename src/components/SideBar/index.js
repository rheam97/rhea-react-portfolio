import React from "react";
import Nav from './Nav'
import './index.scss'

function SideBar({pages, currentPage, setCurrentPage}){
return (
    <div className= 'sidebar'>
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
)
}

export default SideBar