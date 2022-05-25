import React from "react";
import Nav from './Nav'
// import './index.scss'
import StyledSideBar from "./SideBar.styled"
import {bool, func} from 'prop-types'


function SideBar({pages, currentPage, setCurrentPage, setOpen, open}){
return (
    <StyledSideBar className= 'sidebar' open={open}>
        <button className="close" onClick={()=> setOpen(false)}>X</button>
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </StyledSideBar>
)
}

SideBar.propTypes={
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default SideBar;