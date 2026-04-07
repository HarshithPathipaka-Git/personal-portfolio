import React from 'react';
import { blogPosts } from '../data/portfolioData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <section id="blog" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
          <div className="section-title-underline"></div>
          <p className="section-subtitle mt-4">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-image"
                />
                <span className="blog-category">{post.category}</span>
              </div>

              <div className="blog-content">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1 blog-meta">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1 blog-meta">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <button className="blog-read-more">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
