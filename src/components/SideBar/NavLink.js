import React from "react";

function NavLink({ page, currentPage, setCurrentPage }) {
  return (
    <ul key={page}>
      <span
        className={currentPage}
        onClick={() => {setCurrentPage(page)}}>
        {page}
      </span>
    </ul>
  );
}

export default NavLink;
