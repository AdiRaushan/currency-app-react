import { useEffect, useState } from "react";

/* Side effects are things your component does besides rendering, like fetching data, subscribing to events, or updating the DOM directly. multi well*/

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
