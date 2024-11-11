"use client";
import '../component/animation.css'
import { useState } from 'react';
import Link from 'next/link';
import "../component/header.css";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="header">
                <div className="header-container">
                    {/* Logo on the left side */}
                    <img src="/logo.jpg" alt="Logo" className="logo" height={70}
                     width={70} />

                    {/* Centered title on larger screens, left-aligned on small screens */}
                    <h1 className="titl">
                       SHINE SHINE
                    </h1>

                    {/* Hamburger icon for small screens */}
                    <button 
    onClick={toggleMenu} 
    className="hamburger" 
    aria-label={isOpen ? "Close menu" : "Open menu"}
>
    {isOpen ? (
        <svg 
            className="icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" 
            />
        </svg>
    ) : (
        <svg 
            className="icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7" 
            />
        </svg>
    )}
</button>


                    {/* Navigation links for medium and large screens */}
                    <nav className="nav-links">
                        <Link href="/" className="nav-item">Home</Link>
                        <Link href="/services" className="nav-item">Services</Link>
                        <Link href="/about" className="nav-item">About Us</Link>
                        <Link href="/reviews" className="nav-item">Reviews</Link>
                        <Link href="/contact" className="nav-item">Contact Us</Link>
                    </nav>
                </div>

                {/* Mobile menu for small screens */}
                {isOpen && (
                    <nav className="mobile-menu">
                        <Link href="/" className="mobile-nav-item">Home</Link>
                        <Link href="/services" className="mobile-nav-item">Services</Link>
                        <Link href="/about" className="mobile-nav-item">About Us</Link>
                        <Link href="/reviews" className="mobile-nav-item">Reviews</Link>
                        <Link href="/contact" className="mobile-nav-item">Contact Us</Link>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
