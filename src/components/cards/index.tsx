"use client";

// Types
import { type PageInfo, Article } from "@/types";

// Components
import Card from "@/components/card";
import { useState } from "react";

export default function Cards({
  nodes,
  pageInfo,
}: {
  nodes: Article[];
  pageInfo: PageInfo;
}) {
  const [articles, setArticles] = useState<Article[]>(nodes);
  const [info, setInfo] = useState<PageInfo>(pageInfo);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (!info.hasNextPage || loading) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first: 3, // Load 3 articles at a time as specified
          after: info.endCursor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to load articles');
      }
      
      // Append new articles to existing ones
      setArticles(prev => [...prev, ...data.articles.nodes]);
      
      // Update page info for pagination
      setInfo(data.articles.pageInfo);
      
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className="-my-16 w-screen py-16 -mx-[50vw] ml-[calc(50%-50vw)]" 
      style={{ 
        backgroundColor: '#152636',
        fontFamily: 'Inter' // Set Inter as default font for the entire section
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-6" style={{ 
            fontSize: '54px',
            lineHeight: '100%',
            fontWeight: '300',
            color: 'white'
          }}>
            Latest Content
          </h1>
          <p style={{ 
            fontSize: '18px',
            lineHeight: '170%',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '48rem'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate pariatur.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={`${article.id}-${index}`} {...article} />
          ))}
        </div>
        
        {/* Load More Button */}
        {info.hasNextPage && (
          <div className="flex justify-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="rounded-lg hover:bg-red-500 
                       disabled:bg-gray-400 disabled:cursor-not-allowed
                       transition-colors duration-200"
              style={{ 
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '9px 18px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                'Load More Articles'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}