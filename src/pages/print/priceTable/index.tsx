import React from "react";
import { Dropdown, Form, Table, TableRow, Input } from "semantic-ui-react";

import { PrintPriceData } from "./types";
import Currency from "./currency";

type PrintTableProps = {
  rows: PrintPriceData[];
};

type PrintTableState = {
  paperSize: string;
  printType: string;
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
  };

  getData = () =>
    this.props.rows.filter(
      r =>
        this.state.paperSize === r.paperSize && this.state.printType === r.sides
    );

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
                onChange={(e, d) =>
                  this.setState({ paperSize: d.value as string })
                }
                value={this.state.paperSize}
              />
            </Form.Field>
            <Form.Field>
              <label>Druh tisku</label>
              <Dropdown
                selection
                options={printTypes}
                onChange={(e, d) =>
                  this.setState({ printType: d.value as string })
                }
                value={this.state.printType}
              />
            </Form.Field>
            <Form.Field>
              <label>Počet listů</label>
              <Input type="number" />
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
