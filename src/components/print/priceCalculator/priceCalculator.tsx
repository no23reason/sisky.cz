import React from "react";
import _ from "lodash";

import { PrintPriceData } from "../../../types";

import PriceTableForm from "./priceTableForm";
import PriceTable from "./priceTable";

const MAX_QUANTITY = 150;

type PriceCalculatorProps = {
  rows: PrintPriceData[];
};

type PriceCalculatorState = {
  paperSize: string;
  printType: string;
  quantity: number;
};

const paperSizes = [
  { text: "A4 (210 × 297 mm)", value: "A4" },
  { text: "A3 (297 × 420 mm)", value: "A3" },
  { text: "SRA3 (320 × 450 mm)", value: "SRA3" },
];

const printTypes = [
  { text: "černobílý jednostranný", value: "1/0" },
  { text: "černobílý oboustranný", value: "1/1" },
  { text: "barevný jednostranný", value: "4/0" },
  { text: "barevný oboustranný", value: "4/4" },
  { text: "jedna strana barevná, jedna černobílá", value: "4/1" },
];

export default class PriceCalculator extends React.Component<
  PriceCalculatorProps,
  PriceCalculatorState
> {
  state: PriceCalculatorState = {
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
        <PriceTableForm
          onPaperSizeChange={paperSize => this.setState({ paperSize })}
          onPrintTypeChange={printType => this.setState({ printType })}
          onQuantityChange={quantity => this.setState({ quantity })}
          paperSize={this.state.paperSize}
          paperSizes={paperSizes}
          printType={this.state.printType}
          printTypes={printTypes}
          quantity={this.state.quantity}
        />
        <PriceTable
          overMaxQuantity={this.state.quantity > MAX_QUANTITY}
          rows={this.getData()}
        />
      </>
    );
  }
}
