import React from "react";
import NavLink from "./NavLink";
import './index.scss'


function Nav({ pages, currentPage, setCurrentPage }) {
  return (
    <nav>
      <ul className='nav-list'>
        {pages.map((page) => (
          <div className='nav-link' key={page}>
          <NavLink
            page={page}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
