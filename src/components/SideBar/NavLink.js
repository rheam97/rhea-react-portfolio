import React from "react";

function NavLink({ page, currentPage, setCurrentPage, open, setOpen }) {
  const closeBar = ()=> {
    setCurrentPage(page)
    setOpen(false)
  }
  return (
    <ul key={page}>
      <span
        className={currentPage}
        onClick={closeBar}>
        {page}
      </span>
    </ul>
  );
}

export default NavLink;
