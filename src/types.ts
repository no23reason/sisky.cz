export type PrintPriceData = {
  id: string;
  paperSize: string;
  paperType: string;
  printType: string;
  max20: number;
  max49: number;
  max99: number;
  more: number;
};

export type PrintPriceDataRaw = { [T in keyof PrintPriceData]: string };
