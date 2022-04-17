import React from "react";
import Nav from './Nav'

function SideBar({pages, currentPage, setCurrentPage}){
return (
    <div >
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
)
}

export default SideBar