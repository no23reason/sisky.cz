import { PrintPriceData, PrintPriceDataRaw } from "./types";

const parseNumber = (value: string) => parseFloat(value.replace(/,/g, "."));

export const parsePrintData = (input: PrintPriceDataRaw): PrintPriceData => ({
  ...input,
  maxItems: parseNumber(input.maxItems),
  price: parseNumber(input.price),
});
