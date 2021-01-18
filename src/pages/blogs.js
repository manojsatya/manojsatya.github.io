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
                const { title, date, author, tags } = node.frontmatter;
                return (
                  <BlogCard
                    title={title}
                    date={date}
                    author={author}
                    slug={node.fields.slug}
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
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            tags
          }
          excerpt
        }
      }
    }
  }
`;
