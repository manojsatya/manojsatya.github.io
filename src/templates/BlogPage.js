import React from 'react';
import { graphql } from 'gatsby';

export default function BlogPage({ data }) {
  console.log(data, 'data');
  return (
    <article
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      className="text-2xl"
    />
  );
}

export const blogPageQuery = graphql`
  query BlogbySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      id
      html
      frontmatter {
        title
        author
        date
        tags
      }
      excerpt(format: HTML)
    }
  }
`;
