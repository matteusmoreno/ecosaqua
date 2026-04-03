import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Trabalho de Extensão • Estácio
          </motion.div>
          
          <h1>Preservando o Futuro de <span style={{ color: 'var(--primary)' }}>Saquarema</span></h1>
          
          <p>
            Tecnologia e conscientização unidas. Um portal educacional focado em 
            combater a degradação dos nossos ecossistemas costeiros e promover 
            práticas sustentáveis na Capital Nacional do Surfe.
          </p>
          
          <motion.a 
            href="#solucoes" 
            className="btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explorar Iniciativas <ArrowRight size={20} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;