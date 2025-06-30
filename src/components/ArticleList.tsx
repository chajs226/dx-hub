import React, { useState, useMemo } from 'react';
import { Article, Category } from '../types';
import './ArticleList.css';

interface ArticleListProps {
  articles: Article[];
  categories: Category[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') {
      return articles.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    }
    return articles
      .filter(article => article.category === selectedCategory)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [articles, selectedCategory]);

  return (
    <section className="article-list">
      <div className="article-container">
        <h2 className="article-list-title">최신 뉴스 & 기술소개</h2>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <div className="article-category-badge">
                  {getCategoryName(article.category)}
                </div>
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-date">{formatDate(article.publishDate)}</span>
                  <button className="article-read-more">읽어보기</button>
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

export default ArticleList;