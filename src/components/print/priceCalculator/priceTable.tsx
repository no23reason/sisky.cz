import React from "react";
import _ from "lodash";
import { Table, TableRow } from "semantic-ui-react";

import Currency from "./currency";

import { PrintPriceData } from "../../../types";
import {
  getPaperTypeName,
  getPrintPrice,
  PRINT_CUSTOM_PRICE_LIMIT,
} from "../../../utils/print";

const PriceTable: React.SFC<{
  rows: PrintPriceData[];
  quantity: number;
}> = props => (
  <Table compact striped columns="2">
    <Table.Header>
      <TableRow>
        <Table.HeaderCell>Druh papíru</Table.HeaderCell>
        <Table.HeaderCell>Cena za list</Table.HeaderCell>
      </TableRow>
    </Table.Header>
    <Table.Body>
      {props.rows.map(r => (
        <Table.Row key={r.id}>
          <Table.Cell>{getPaperTypeName(r.paperType)}</Table.Cell>
          <Table.Cell textAlign="right">
            {props.quantity > PRINT_CUSTOM_PRICE_LIMIT
              ? "dohodou, maximálně "
              : ""}
            <Currency amount={getPrintPrice(r, props.quantity)} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default PriceTable;
