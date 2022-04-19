import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar'
import Page from './components/Page'
import Footer from "./components/Footer";

import './app.scss';


function App() {
  const [pages] = useState(['About', 'Projects', 'Contact', 'Resume'])
  const [currentPage, setCurrentPage] = useState(pages[0])
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);
  return (
    <body>
    <SideBar pages ={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <main>
    <Page currentPage={currentPage}/>
    <Footer></Footer>
    </main>
    </body>
  );
}

export default App;
