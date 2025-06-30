import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import ArticleList from './components/ArticleList';
import { articles, categories } from './data/mockData';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">의료IT를 선도하는 서울아산병원</h1>
          <p className="hero-subtitle">디지털혁신본부와 함께 미래 의료기술을 개척합니다</p>
          <a href="#featured" className="hero-cta">
            혁신 사례 보기
          </a>
        </div>
      </section>
      <main>
        <FeaturedArticles articles={articles} />
        <ArticleList articles={articles} categories={categories} />
      </main>
    </div>
  );
}

export default App;
