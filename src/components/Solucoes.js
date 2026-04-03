import React from 'react';
import { motion } from 'framer-motion';

const solucoesData = [
  {
    title: 'Palestras e Rodas de Conversa',
    desc: 'Integração com escolas locais para debater consumo consciente e a separação correta de resíduos, formando jovens multiplicadores.'
  },
  {
    title: 'Sinalização Inteligente',
    desc: 'Implantação de placas informativas sustentáveis nos acessos às praias, educando turistas sobre a importância vital de não pisar na restinga.'
  },
  {
    title: 'Mutirões de Ação Direta',
    desc: 'Organização de eventos mensais de limpeza das margens da Lagoa e faixas de areia, unindo voluntários e associações de surfe.'
  }
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Plano de Intervenção</h2>
          <p className="section-subtitle">
            Estratégias práticas e mensuráveis para transformar a conscientização teórica em resultados visíveis na cidade.
          </p>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {solucoesData.map((item, index) => (
            <motion.div 
              key={index}
              className="action-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="action-number">0{index + 1}</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;