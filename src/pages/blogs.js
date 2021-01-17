import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from '../components/Blog/BlogCard';

export default function blogs() {
  return (
    <div>
      <StaticQuery
        query={blogsQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                const { title, date, author, slug, tags } = node.frontmatter;
                return (
                  <BlogCard
                    title={title}
                    date={date}
                    author={author}
                    slug={slug}
                    tags={tags}
                    excerpt={node.excerpt}
                  />
                );
              })}
            </div>
          );
        }}
      />
    </div>
  );
}

const blogsQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            slug
            tags
          }
          excerpt
        }
      }
    }
  }
`;
