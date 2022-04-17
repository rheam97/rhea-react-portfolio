import React, { useState } from 'react';
import Nav from './components/Nav'
import Page from './components/Page'
import Footer from "./components/Footer";

import './App.css';

function App() {
  const [pages] = useState(['About', 'Projects', 'Contact', 'Resume'])
  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <body>
    <Nav pages ={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <main>
    <Page currentPage={currentPage}/>
    </main>
    <Footer></Footer>
    </body>
  );
}

export default App;
