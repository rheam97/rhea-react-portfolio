import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar'
import Page from './components/Page'
import Footer from "./components/Footer";

import './App.css';

const sideBarStyle= {
  height: '100%',
  width: '300px',
  position: 'fixed',
  zIndex: '1',
  top: '0',
  right: '0',
  overflowX: 'hidden',
  paddingTop: '20px'
}

const mainStyle = {
  marginRight: '160px', 
  fontSize: '45px', 
  padding: '0px 10px'
}

function App() {
  const [pages] = useState(['About', 'Projects', 'Contact', 'Resume'])
  const [currentPage, setCurrentPage] = useState(pages[0])
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);
  return (
    <>
    <SideBar style={sideBarStyle} pages ={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <main style={mainStyle}>
    <Page currentPage={currentPage}/>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
