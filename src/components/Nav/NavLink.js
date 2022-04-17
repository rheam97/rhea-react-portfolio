import React from "react";

function NavLink({ page, currentPage, setCurrentPage }) {
  return (
    <li key={page}>
      <span
        className={currentPage}
        onClick={() => {setCurrentPage(page)}}>
        {page}
      </span>
    </li>
  );
}

export default NavLink;
