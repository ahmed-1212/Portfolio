import React from 'react';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer'
const Layout = (props) => {
    return (
        <div>
            {props.children}
            <Navbar />
            <Footer />
        </div>
    )
}

export default Layout;