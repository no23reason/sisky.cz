import React from "react";
import { Link } from "gatsby";

import { primary } from "../utils/colors";
import { Container } from "semantic-ui-react";

const Header = () => (
  <header
    style={{
      background: primary,
      marginBottom: "1.45rem",
    }}
  >
    <Container
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          sisky.cz
        </Link>
      </h1>
    </Container>
  </header>
);

export default Header;
