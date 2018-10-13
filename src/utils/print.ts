import { PrintPriceData, PrintPriceDataRaw } from "../types";

const parseNumber = (value: string) => parseFloat(value.replace(/,/g, "."));

export const parsePrintData = (input: PrintPriceDataRaw): PrintPriceData => ({
  ...input,
  max20: parseNumber(input.max20),
  max49: parseNumber(input.max49),
  max99: parseNumber(input.max99),
  more: parseNumber(input.more),
});

const paperTypeNames = {
  k: "kancelářský",
  m: "matný",
  r: "recyklovaný",
};
const paperTypCodeRegex = /^(\d+)(\D)$/;
export const getPaperTypeName = (paperTypeCode: string): string => {
  const match = paperTypCodeRegex.exec(paperTypeCode);
  if (!match) {
    throw new Error("Invalid paper type code");
  }

  const weight = match[1];
  const typeCode = match[2];

  return `${weight}g ${paperTypeNames[typeCode]}`;
};

export const PRINT_CUSTOM_PRICE_LIMIT = 150;
export const getPrintPrice = (
  printPriceData: PrintPriceData,
  amount: number
): number => {
  if (amount > 99) {
    return printPriceData.more;
  }
  if (amount > 49) {
    return printPriceData.max99;
  }
  if (amount > 20) {
    return printPriceData.max49;
  }
  return printPriceData.max20;
};
