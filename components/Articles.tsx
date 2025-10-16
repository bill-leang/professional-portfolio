
import React from 'react';
import { ARTICLES } from '../constants';
import { Article } from '../types';
import { ArrowRightIcon } from './icons';


const ArticleItem: React.FC<{ article: Article }> = ({ article }) => {
    return (
        <div className="py-8 border-b border-slate-200">
            <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                <a href={article.link} className="hover:text-sky-500 transition-colors duration-300">{article.title}</a>
            </h3>
            <p className="text-slate-600 mb-4">{article.preview}</p>
            <a href={article.link} className="font-semibold text-sky-500 inline-flex items-center hover:text-sky-600 transition-colors">
                Read on {article.platform}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
        </div>
    )
}


const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-12">
          Writing & Articles
        </h2>
        <div>
            {ARTICLES.map(article => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
