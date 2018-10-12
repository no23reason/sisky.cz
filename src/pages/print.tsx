import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import { PrintPriceDataRaw } from "../types";
import { parsePrintData } from "../utils/print";
import PriceTable from "../components/print/priceTable/index";

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
        <PriceTable
          rows={data.allPrintCsv.edges.map(e => parsePrintData(e.node))}
        />
      )}
    </StaticQuery>
  </Layout>
);

export default Print;