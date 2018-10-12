import React from "react";
import _ from "lodash";
import { Dropdown, Form, Table, TableRow, Input } from "semantic-ui-react";

import Currency from "./currency";
import { PrintPriceData } from "../../../pages/print/types";

const MAX_QUANTITY = 150;

type PrintTableProps = {
  rows: PrintPriceData[];
};

type PrintTableState = {
  paperSize: string;
  printType: string;
  quantity: number;
};

const paperSizes = [
  { text: "A4 (210 x 297 mm)", value: "A4" },
  { text: "A3 (297 x 420 mm)", value: "A3" },
  { text: "SRA3 (320 x 450 mm)", value: "SRA3" },
];

const printTypes = [
  { text: "černobílý jednostranný", value: "1/0" },
  { text: "černobílý oboustranný", value: "1/1" },
  { text: "barevný jednostranný", value: "4/0" },
  { text: "barevný oboustranný", value: "4/4" },
  { text: "jedna strana barevná, jedna černobílá", value: "4/1" },
];

export default class PriceTable extends React.Component<
  PrintTableProps,
  PrintTableState
> {
  state: PrintTableState = {
    paperSize: "A4",
    printType: "1/0",
    quantity: 10,
  };

  getData = (): PrintPriceData[] => {
    if (!this.props.rows) {
      return [];
    }

    const sizeRelevantData = this.props.rows.filter(
      r =>
        this.state.paperSize === r.paperSize && this.state.printType === r.sides
    );
    const paperTypeGroups = _.groupBy(
      sizeRelevantData,
      d => `${d.paperSize};${d.paperType};${d.sides}`
    );

    return _.map(paperTypeGroups, g => {
      const result = _.find(
        _.orderBy(g, d => d.maxItems),
        g => g.maxItems >= this.state.quantity
      );
      return result || _.minBy(g, d => d.price);
    });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Velikost papíru</label>
              <Dropdown
                selection
                options={paperSizes}
                onChange={(_, { value }) =>
                  this.setState({ paperSize: value as string })
                }
                value={this.state.paperSize}
              />
            </Form.Field>
            <Form.Field>
              <label>Druh tisku</label>
              <Dropdown
                selection
                options={printTypes}
                onChange={(_, { value }) =>
                  this.setState({ printType: value as string })
                }
                value={this.state.printType}
              />
            </Form.Field>
            <Form.Field>
              <label>Počet listů</label>
              <Input
                type="number"
                onChange={(_, { value }) =>
                  this.setState({ quantity: parseInt(value as string, 10) })
                }
                min={1}
                value={this.state.quantity}
              />
            </Form.Field>
          </Form.Group>
        </Form>
        <Table compact striped>
          <Table.Header>
            <TableRow>
              <Table.HeaderCell>Druh papíru</Table.HeaderCell>
              <Table.HeaderCell>Cena za list</Table.HeaderCell>
            </TableRow>
          </Table.Header>
          <Table.Body>
            {this.getData().map(r => (
              <Table.Row key={r.id}>
                <Table.Cell>{r.paperType}</Table.Cell>
                <Table.Cell textAlign="right">
                  {this.state.quantity > MAX_QUANTITY
                    ? "dohodou, maximálně "
                    : ""}
                  <Currency amount={r.price} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    );
  }
}
