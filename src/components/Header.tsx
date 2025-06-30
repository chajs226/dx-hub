import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={require('../assets/img_cslist01.gif')} alt="서울아산병원 로고" className="logo-image" />
          <div className="logo-text">
            <h1 className="logo">디지털정보혁신본부</h1>
            <p className="subtitle">Digital Healthcare Innovation Hub</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">홈</a>
          <a href="#projects" className="nav-link">프로젝트</a>
          <a href="#technology" className="nav-link">기술소개</a>
          <a href="#news" className="nav-link">뉴스</a>
          <a href="#contact" className="nav-link">문의</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;