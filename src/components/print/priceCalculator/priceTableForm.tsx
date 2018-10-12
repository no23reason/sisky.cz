import React from "react";
import _ from "lodash";
import { Dropdown, Form, Input } from "semantic-ui-react";

const PriceTableForm: React.SFC<{
  paperSizes: { text: string; value: string }[];
  paperSize: string;
  onPaperSizeChange: (newValue: string) => void;
  printTypes: { text: string; value: string }[];
  printType: string;
  onPrintTypeChange: (newValue: string) => void;
  quantity: number;
  onQuantityChange: (newValue: number) => void;
}> = props => (
  <Form>
    <Form.Group widths="equal">
      <Form.Field>
        <label>Velikost papíru</label>
        <Dropdown
          selection
          options={props.paperSizes}
          onChange={(_, { value }) => props.onPaperSizeChange(value as string)}
          value={props.paperSize}
        />
      </Form.Field>
      <Form.Field>
        <label>Druh tisku</label>
        <Dropdown
          selection
          options={props.printTypes}
          onChange={(_, { value }) => props.onPrintTypeChange(value as string)}
          value={props.printType}
        />
      </Form.Field>
      <Form.Field>
        <label>Počet listů</label>
        <Input
          type="number"
          onChange={(_, { value }) =>
            props.onQuantityChange(parseInt(value, 10))
          }
          min={1}
          value={props.quantity}
        />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default PriceTableForm;
