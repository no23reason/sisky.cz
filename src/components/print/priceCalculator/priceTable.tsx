import React from "react";
import _ from "lodash";
import { Table, TableRow } from "semantic-ui-react";

import Currency from "./currency";

import { PrintPriceData } from "../../../types";

const PriceTable: React.SFC<{
  rows: PrintPriceData[];
  overMaxQuantity?: boolean;
}> = props => (
  <Table compact striped>
    <Table.Header>
      <TableRow>
        <Table.HeaderCell>Druh papíru</Table.HeaderCell>
        <Table.HeaderCell>Cena za list</Table.HeaderCell>
      </TableRow>
    </Table.Header>
    <Table.Body>
      {props.rows.map(r => (
        <Table.Row key={r.id}>
          <Table.Cell>{r.paperType}</Table.Cell>
          <Table.Cell textAlign="right">
            {props.overMaxQuantity ? "dohodou, maximálně " : ""}
            <Currency amount={r.price} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default PriceTable;
