import React from "react";

const Converter = () => {
  let rates = 1.139283;
  return <button onClick={currency2(currency1 * rates)}>-></button>;
};

export default Converter;
