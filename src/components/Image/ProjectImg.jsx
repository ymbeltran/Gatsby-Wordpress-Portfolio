import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/*
{
  images: allFile(filter: {base: {eq:"2019-03-03_1641.png"}}) {
    edges {
      node {
        relativePath
        name
        base
        absolutePath
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
            src
          }
          original {
            src
          }
        }
      }
    }
  }
}*/

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile (limit: 300) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      
      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={alt} fluid={imageFluid} />;
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
