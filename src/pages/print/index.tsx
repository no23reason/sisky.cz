import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import PriceTable from "./priceTable";

const Print = () => (
  <Layout>
    <StaticQuery
      query={graphql`
          query Print {
            allPrintCsv {
              edges {
                node {
                  id
                  paperSize
                  paperType
                  sides
                  maxItems
                  price
                }
              }
            }
          }
        `}
    >
      {data => (
        <PriceTable rows={data.allPrintCsv.edges.map(e => e.node)} />
      )}
    </StaticQuery>
  </Layout>
);

export default Print;
