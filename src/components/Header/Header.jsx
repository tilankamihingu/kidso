import React, {useState} from 'react';
import './Header.css';
import Logo from '../../images/flog.png';
import Menu from '../../images/menu.png';
import {Link} from 'react-router-dom';
import Close from '../../images/closei.png';

function Header() {
   const [menu, setMenu] = useState(false)

   const toggleMenu = () =>{
       setMenu(!menu)
   }

   const styleMenu = {
       left:menu ?0 : "-100%"
   }
    return (
        <div className="container">
            <div className="navbar">
                <img src={Logo} alt="" className="logo" />
                <nav>
                    <ul style={styleMenu}>
                        <li onClick={toggleMenu}><Link to="/">Home</Link></li>
                        <li onClick={toggleMenu}><Link to="/products">products</Link></li>
                        <li onClick={toggleMenu}><Link to="/contacts">contact Us</Link></li>
                        <li onClick={toggleMenu}><Link to="/admin">Admin</Link></li>
                        <li onClick={toggleMenu}><img src={Close} className="menu" alt="" /></li>
                    </ul>
                </nav>
                <div className="menu" onClick={toggleMenu} >
                    <img src={Menu} alt="" className="menu-icon"/>
                </div>
                
            </div>
        </div>
    )
}

export default Header
