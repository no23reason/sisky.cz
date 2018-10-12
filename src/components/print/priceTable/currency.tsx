import React from "react";

const Currency: React.SFC<{ amount: number }> = props => (
  <>{props.amount ? props.amount.toFixed(2).replace(/\./g, ",") : "0,00"} Kč</>
);

export default Currency;
