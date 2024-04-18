'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi'; // Importa el ícono de menú (hamburguesa)

import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src="/logotipo.png" alt="Logo" width={120} height={60} />
          </Link>
        </div>
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FiMenu size={24} /> {/* Ícono de menú */}
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Aplica el className a Link y elimina la etiqueta <a> */}
          <Link href="/about" passHref><span className="nav-item">About Us</span></Link>
          <Link href="/properties" passHref><span className="nav-item">Properties</span></Link>
          <Link href="/services" passHref><span className="nav-item">Services</span></Link>
          <Link href="/contact" passHref><span className="nav-item">Contact</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
