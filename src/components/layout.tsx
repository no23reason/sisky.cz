import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Container } from "semantic-ui-react";
import "semantic-ui-less/semantic.less";

import Header from "./header";
import Footer from "./footer";

const Layout: React.SFC<{ title: string }> = ({ children, title }) => (
  <>
    <Helmet
      title={`${title} – sisky.cz`}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <Container style={{ minHeight: "85vh" }}>
      <main>{children}</main>
    </Container>
    <Footer />
  </>
);

export default Layout;
