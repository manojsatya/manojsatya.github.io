import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function BlogPage({ data }) {
  console.log(data, 'data');
  return (
    <Layout>
      <article
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        className="text-2xl font-extrabold"
      />
    </Layout>
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
