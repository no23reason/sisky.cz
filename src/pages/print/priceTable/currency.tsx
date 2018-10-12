import React from "react";

const Currency: React.SFC<{ amount: string }> = props => (
  <span>
    {parseFloat(props.amount.replace(/,/g, "."))
      .toFixed(2)
      .replace(/\./g, ",")}{" "}
    Kč
  </span>
);

export default Currency;
