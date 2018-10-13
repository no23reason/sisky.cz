import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Header } from "semantic-ui-react";

import Layout from "../components/layout";
import Carousel from "../components/carousel";

const Advertising = () => (
  <Layout title="Reklamní agentura">
    <Header>Reklamní agentura</Header>

    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { relativePath: { regex: "/promotionalItems/" } }
          ) {
            edges {
              node {
                childImageSharp {
                  fixed(height: 300) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      `}
    >
      {data => (
        <>
          <Carousel
            arrows
            slidesToShow={3}
            centerMode
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                },
              },

              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {data.images.edges.map(e => (
              <Img key={e.node.id} fixed={e.node.childImageSharp.fixed} />
            ))}
          </Carousel>
        </>
      )}
    </StaticQuery>
  </Layout>
);

export default Advertising;
