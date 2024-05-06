import { useEffect, useState } from "react";

/* Side effects are things your component does besides rendering, like fetching data, subscribing to events, or updating the DOM directly. multi well*/

const useCurrencyInfo = (currency) => {
  useEffect(() => {
    fetch();
  }, []);
};

export default useCurrencyInfo;
