import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, TreePine, Recycle } from 'lucide-react';

const desafiosData = [
  {
    title: 'Poluição da Lagoa',
    desc: 'O lançamento irregular de efluentes e lixo sólido compromete a oxigenação da água, impactando severamente a pesca artesanal e a fauna local.',
    icon: <Droplets size={32} color="#38bdf8" />, // Cyan neon
  },
  {
    title: 'Pressão na Restinga',
    desc: 'A vegetação nativa sofre com o pisoteio desordenado nas praias, fragilizando a barreira natural que protege nossa costa contra o avanço das marés.',
    icon: <TreePine size={32} color="#10b981" />, // Emerald neon
  },
  {
    title: 'Crise de Resíduos',
    desc: 'O pico populacional nos verões gera um volume massivo de plásticos nas areias de Itaúna e Vila, sobrecarregando o sistema de coleta da cidade.',
    icon: <Recycle size={32} color="#fbbf24" />, // Amber neon
  }
];

const Desafios = () => {
  return (
    <section id="desafios" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Diagnóstico Crítico</h2>
          <p className="section-subtitle">
            Mapeamos as principais ameaças ambientais que exigem intervenção imediata da comunidade e do poder público.
          </p>
        </motion.div>

        <div className="grid">
          {desafiosData.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Desafios;