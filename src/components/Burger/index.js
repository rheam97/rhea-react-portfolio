import React from 'react';
import {bool, func} from 'prop-types'
import StyledBurger from './Burger.style';
function Burger({open, setOpen}) {

    return (
        <StyledBurger open ={open} onClick={()=> setOpen(true)}>
            <span/>
            <span/>
            <span/>
        </StyledBurger>
    );
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Burger;