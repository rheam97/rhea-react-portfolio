import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar'
import Page from './components/Page'
import Footer from "./components/Footer";
import Burger from './components/Burger'

import './app.scss';


function App() {
  const [pages] = useState(['About', 'Projects', 'Contact', 'Resume'])
  const [currentPage, setCurrentPage] = useState(pages[0])
  const[open, setOpen] = useState(false)
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);
  return (
    <body>
    <Burger open={open} setOpen={setOpen}/>
    <SideBar setOpen={setOpen} open={open} pages ={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <main>
    <Page currentPage={currentPage}/>
    <Footer></Footer>
    </main>
    </body>
  );
}

export default App;
