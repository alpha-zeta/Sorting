import { Input, Box, useColorModeValue } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { ArrContext } from "../../Context/arrContext.context";
import useResize from "../../Hooks/useResize.hooks";

function Chart(props) {
  const { array, compare, algorithm } = useContext(ArrContext);
  const { arr, setArr } = array;
  const { comp, setComp } = compare;
  const { algo, setAlgo } = algorithm;
  const len = arr.length;
  const myref = useRef();
  const { width, height } = useResize(myref);
  const w = width / (3 * len);
  const h = 300 / len;
  const changeCol = useColorModeValue("black", "lavender");
  return (
    <Box>
      <Box
        d="inline-flex"
        alignItems="flex-end"
        justifyContent="space-evenly"
        ref={myref}
        height="300px"
        className="arrayCont"
        width="full"
        overflow="hidden"
      >
        {arr.map((obj, index) => (
          <Box
            key={index}
            bgColor={
              algo == 1
                ? index == comp[0] || index == comp[1]
                  ? changeCol
                  : "tomato"
                : algo == 2 && comp[0] != -1
                ? index <= comp[0]
                  ? changeCol
                  : "tomato"
                : "tomato"
            }
            className="bar"
            style={{
              height: `${parseInt(obj * h)}px`,
              width: `${w}px`,
            }}
          ></Box>
        ))}
      </Box>
      <Input textAlign="center" readOnly value={arr} my="8" />
    </Box>
  );
}

export default Chart;
