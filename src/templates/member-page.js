import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const MemberPageTemplate = ({ title, image, heading, subheading, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <FullWidthImage img={image} title={title} subheading={subheading} />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {heading}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MemberPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const MemberPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MemberPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.html}
        subheading={post.html}
        content={post.html}
      />
    </Layout>
  );
};

MemberPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MemberPage;

export const memberPageQuery = graphql`
  query MemberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
