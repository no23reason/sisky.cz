import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import { PrintPriceDataRaw } from "../types";
import { parsePrintData } from "../utils/print";
import PriceCalculator from "../components/print/priceCalculator/priceCalculator";

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
      {(data: { allPrintCsv: { edges: { node: PrintPriceDataRaw }[] } }) => (
        <PriceCalculator
          rows={data.allPrintCsv.edges.map(e => parsePrintData(e.node))}
        />
      )}
    </StaticQuery>
  </Layout>
);

export default Print;
