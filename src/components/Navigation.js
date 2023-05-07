import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };
    
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };
    return(
        <nav>
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutBrand">AboutBrand</Link></li>
                <li><Link to="/OnlineStore">OnlineStore</Link></li>
                <li><Link to="/BuisinessStore">BuisinessStore</Link></li>
                <li><Link to="/Community">Community</Link></li>
                <li><Link to="/Press">Press</Link></li>
                <li><Link to="/ContactUs">ContactUs</Link></li>
                <li><Link to="/MyAccount">MyAccount</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;