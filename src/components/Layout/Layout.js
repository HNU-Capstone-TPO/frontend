import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer'
const Layout = () => {
  return (
    
    <div >
      
      <Navbar />
      <main style={{ paddingTop: '120px' }}> 
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;