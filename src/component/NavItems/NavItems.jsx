import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../Assest/images/logo/logo.png"

function NavItems() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socailToggle, setSocailToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false)
        }
    })

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ''}`}>
            <div className={`header-top d-md-none ${socailToggle ? "open" : ''}`}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className="lab-btn me-3 d-md-block"><span>Create Account</span></Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-search-acte">
                            <div className="logo">
                    
                                <Link to={"/"}>
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>


                            <Link to="/Sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Login</Link>

                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="ellepsis-bar d-md-none" onClick={() => setSocailToggle(!socailToggle)}>
                            <i class="icofont-info"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavItems