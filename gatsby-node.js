const { slugify } = require('./src/utils/sluglify');
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slugifyFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      value: slugifyFromTitle,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const singleBlogPageTemplate = path.resolve('src/templates/BlogPage.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const blogs = res.data.allMarkdownRemark.edges;

    blogs.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: singleBlogPageTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
