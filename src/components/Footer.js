import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4><Leaf className="logo-icon" size={24} /> EcoSaqua</h4>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              Projeto Acadêmico - Atividade de Extensão.<br/>
              Unindo tecnologia e educação para um futuro mais verde na Região dos Lagos.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Eixos de Atuação</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2.5', color: 'var(--text-muted)' }}>
              <li>Educação Ambiental Básica</li>
              <li>Preservação de Ecossistemas</li>
              <li>Gestão de Resíduos Sólidos</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Parcerias Mapeadas</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2.5', color: 'var(--text-muted)' }}>
              <li>Associação de Surf de Saquarema</li>
              <li>Secretaria Municipal de Meio Ambiente</li>
              <li>Escolas da Rede Pública</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Desenvolvido com React para o Trabalho de Extensão (Estácio).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;