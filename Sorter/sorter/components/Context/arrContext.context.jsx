import React, { useContext, createContext, useState } from "react";
import { ranArr } from "../Data/function";

export const ArrContext = createContext();
function ArrProvider({ children }) {
  const defLen = 50;
  const [arr, setArr] = useState(ranArr(defLen));
  const [comp, setComp] = useState([-1, -1]);
  const [algo, setAlgo] = useState(1);
  const context = {
    array: {
      arr,
      setArr,
    },
    compare: {
      comp,
      setComp,
    },
    algorithm: {
      algo,
      setAlgo,
    },
  };
  return <ArrContext.Provider value={context}>{children}</ArrContext.Provider>;
}

export default ArrProvider;
