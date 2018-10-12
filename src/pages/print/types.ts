export type PrintPriceData = {
  id: string;
  paperSize: string;
  paperType: string;
  sides: string;
  maxItems: number;
  price: number;
};

export type PrintPriceDataRaw = { [T in keyof PrintPriceData]: string };
