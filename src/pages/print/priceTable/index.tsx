import React from "react";

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
  { name: "A4 (210 x 297 mm)", value: "A4" },
  { name: "A3 (420 x 297 mm)", value: "A3" },
];

const printTypes = [
  { name: "černobílý jednostranný", value: "1/0" },
  { name: "černobílý oboustranný", value: "1/1" },
  { name: "barevný jednostranný", value: "4/0" },
  { name: "barevný oboustranný", value: "4/4" },
  { name: "jedna strana barevná, jedna černobílá", value: "4/1" },
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
        <select
          value={this.state.paperSize}
          onChange={e => this.setState({ paperSize: e.target.value })}
        >
          {paperSizes.map(s => (
            <option key={s.value} value={s.value}>
              {s.name}
            </option>
          ))}
        </select>
        <select
          value={this.state.printType}
          onChange={e => this.setState({ printType: e.target.value })}
        >
          {printTypes.map(s => (
            <option key={s.value} value={s.value}>
              {s.name}
            </option>
          ))}
        </select>
        <table>
          <tbody>
            {this.getData().map(r => (
              <tr key={r.id}>
                <td>{r.paperType}</td>
                <td>
                  <Currency amount={r.price} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
