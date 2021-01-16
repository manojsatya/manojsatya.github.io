import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

export default function blogs() {
  return (
    <div>
      <StaticQuery
        query={blogsQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div>
                  <p>{node.frontmatter.title}</p>
                  <p>{node.frontmatter.date}</p>
                  <p>{node.frontmatter.author}</p>
                  <p>{node.frontmatter.slug}</p>
                  <p>{node.frontmatter.tags}</p>
                  <p>{node.excerpt}</p>
                </div>
              ))}
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
