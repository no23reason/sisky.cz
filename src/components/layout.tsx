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
    <Header height="6rem" marginBottom="1.45rem" />
    <Container style={{ minHeight: "calc(100vh - 11.45rem)" }}>
      <main>{children}</main>
    </Container>
    <Footer height="4rem" />
  </>
);

export default Layout;
