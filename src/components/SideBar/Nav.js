import React from "react";
import NavLink from "./NavLink";

function Nav({ pages, currentPage, setCurrentPage }) {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <NavLink
            key={page}
            page={page}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
