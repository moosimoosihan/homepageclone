import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from'../logo.png';
import './Navistyle.css';

const Navigation = () => {
    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPos = window.pageYOffset;
        const maxOpacity = 1;
  
        if (scrollPos === 0) {
          setBgOpacity(0); // 맨 위에 있을 때 투명
        } else if (scrollPos + clientHeight >= scrollHeight) {
          setBgOpacity(maxOpacity); // 맨 아래로 내려갈 때 완전히 하얗게
        } else {
          const progress = (scrollPos / (scrollHeight - clientHeight)) * 100;
          const opacity = Math.min(1, progress / 100); // 스크롤 위치에 따라 투명도 적용
          setBgOpacity(opacity);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const bgColor = `rgba(255, 255, 255, ${bgOpacity})`;
    
    return(
        <nav style={{ backgroundColor : bgColor }}>
            <ul className="menu">
                <li><Link to="/"><img src={logo} alt="logo" /></Link></li>
                <li><Link to="/AboutBrand">ABOUT BRAND</Link></li>
                <li>
                    <Link to="/OnlineStore">ONLINE STORE ∨</Link>
                    <ul className="submenu">
                        <li><Link to="/OnlineStore/FirstCoffeeTime">FIRST,COFEE TIME!</Link></li>
                        <li><Link to="/OnlineStore/CoffeeOne">COFFEE - 원산지별 원두</Link></li>
                        <li><Link to="/OnlineStore/CoffeeTwo">COFFEE - 하우스 블랜드</Link></li>
                        <li><Link to="/OnlineStore/Living">LIVING</Link></li>
                        <li><Link to="/OnlineStore/Business">BUSINESS</Link></li>
                    </ul>
                </li>
                <li><Link to="/BuisinessStore">BUISINESS STORE</Link></li>
                <li>
                    <Link to="/Community">COMMUNITY ∨</Link>
                    <ul className="submenu">
                        <li><Link to="/Community/Notice">NOTICE</Link></li>
                        <li><Link to="/Community/QA">Q&A</Link></li>
                        <li><Link to="/Community/Review">REVIEW</Link></li>
                        <li><Link to="/Community/Photoreview">PHOTO REVIEW</Link></li>
                    </ul>
                </li>
                <li><Link to="/Press">PRESS</Link></li>
                <li><Link to="/ContactUs">CONTACT US</Link></li>
                <li>
                    <Link to="/MyAccount">🔒 MY ACCOUNT ∨</Link>
                    <ul className="submenu">
                        <li><Link to="/MyAccount/Login">LOGIN</Link></li>
                        <li><Link to="/MyAccount/Joinus">JOIN US</Link></li>
                        <li><Link to="/MyAccount/Order">ORDER</Link></li>
                        <li><Link to="/MyAccount/Mypage">MY PAGE</Link></li>
                        <li><Link to="/MyAccount/Delivery">DELIVERY</Link></li>
                    </ul>
                </li>
                <li><Link to="/Shopingbag">🛒</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;