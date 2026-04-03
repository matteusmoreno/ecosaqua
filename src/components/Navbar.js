import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        borderColor: scrolled ? 'var(--border-color)' : 'transparent'
      }}
    >
      <div className="container nav-container">
        <div className="logo">
          <Leaf size={24} className="logo-icon" />
          EcoSaqua
        </div>
        <div className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#desafios">O Problema</a>
          <a href="#solucoes">Ações Educativas</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;