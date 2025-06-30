import React from 'react';
import { Article } from '../types';
import './FeaturedArticles.css';

interface FeaturedArticlesProps {
  articles: Article[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  const featuredArticles = articles.filter(article => article.featured).slice(0, 3);

  return (
    <section className="featured-articles">
      <div className="featured-container">
        <h2 className="featured-title">주요 소식</h2>
        <div className="featured-grid">
          {featuredArticles.map((article, index) => (
            <article key={article.id} className={`featured-card ${index === 0 ? 'main-feature' : ''}`}>
              <div className="featured-image">
                <div className="category-badge">{getCategoryName(article.category)}</div>
              </div>
              <div className="featured-content">
                <h3 className="featured-article-title">{article.title}</h3>
                <p className="featured-summary">{article.summary}</p>
                <div className="featured-meta">
                  <span className="publish-date">{formatDate(article.publishDate)}</span>
                  <button className="read-more">자세히 보기</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const getCategoryName = (categoryId: string): string => {
  const categoryMap: { [key: string]: string } = {
    'ai': 'AI/머신러닝',
    'telemedicine': '원격의료',
    'iot': 'IoT/웨어러블',
    'blockchain': '블록체인',
    'digital-therapeutics': '디지털치료제'
  };
  return categoryMap[categoryId] || '기타';
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default FeaturedArticles;