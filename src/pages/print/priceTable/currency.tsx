import React from "react";

const Currency: React.SFC<{ amount: number }> = props => (
  <span>{props.amount.toFixed(2).replace(/\./g, ",")} Kč</span>
);

export default Currency;
