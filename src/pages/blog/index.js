import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO/SEO";

import BlogPage from "../../views/Blog/Blog";

const BlogList = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const blogPosts = data.allMarkdownRemark.nodes;
  return (
    <>
      <SEO title="Blog" />
      <BlogPage blogPosts={blogPosts} />
    </>
  );
};

export default BlogList;

export const blogPostListQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          subtitle
          canonicalURL
        }
      }
    }
  }
`;
