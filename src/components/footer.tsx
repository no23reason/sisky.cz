import React from "react";
import { Link } from "gatsby";
import { Container } from "semantic-ui-react";

import { primary } from "../utils/colors";

const Footer = () => (
  <footer
    style={{
      background: primary,
      marginTop: "1.45rem",
    }}
  >
    <Container
      style={{
        padding: "1.45rem 1.0875rem",
      }}
    >
      <nav>
        <ul>
          <li>
            <Link to="/contacts">Kontakty</Link>
          </li>
        </ul>
      </nav>
      Copyright &copy; {new Date().getFullYear()} sisky.cz
    </Container>
  </footer>
);

export default Footer;
