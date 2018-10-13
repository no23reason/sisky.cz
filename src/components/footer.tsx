import React from "react";
import { Link } from "gatsby";
import { Container } from "semantic-ui-react";

import { primary } from "../utils/colors";

const Footer = ({ height }) => (
  <footer
    style={{
      background: primary,
      height,
    }}
  >
    <Container
      style={{
        padding: "1.45rem 1.0875rem",
      }}
    >
      <nav>
        <li>
          <Link to="/contacts">Kontakty</Link>
        </li>
      </nav>
      Copyright &copy; {new Date().getFullYear()} sisky.cz
    </Container>
  </footer>
);

export default Footer;
