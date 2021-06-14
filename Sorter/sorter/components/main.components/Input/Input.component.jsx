import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  FormHelperText,
  Input,
  Button,
  useColorMode,
  Box,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import SliderComp from "./Slider.component";
import { FaSortAmountUp } from "react-icons/fa";
import { ArrContext } from "../../Context/arrContext.context";
import { ranArr } from "../../Data/function";
import {
  bubbleSortRobust,
  insertionSort,
  insertionSortRobust,
} from "../../Data/sort.function";
function InputComp(props) {
  const { array, compare, algorithm } = useContext(ArrContext);
  const { arr, setArr } = array;
  const { comp, setComp } = compare;
  const { algo, setAlgo } = algorithm;
  const algoName = ["BubbleSort", "InsertionSort"];
  const [active, setActive] = useState(true);
  const toast = useToast();
  const handleAlgo = (e) => {
    if (active) {
      setAlgo(parseInt(e));
    }
  };
  const bgButton = useColorModeValue("gray.300", "gray.700");
  const button = useColorModeValue("gray.100", "gray.500");
  const fontSet = { sm: "small", md: "xl", lg: "2xl" };
  const padSet = { sm: "2", md: "4" };

  const handleSort = async (e) => {
    setActive(false);
    let vals = [];
    if (algo == 1) {
      vals = await bubbleSortRobust(arr, setArr, setComp);
    } else if (algo == 2) {
      vals = await insertionSortRobust(arr, setArr, setComp);
    }
    setActive(true);
    toast({
      title: `${algoName[algo]} done.`,
      description: `Time taken: ${vals[1] * 1000} micro s`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Box>
      <SliderComp active={active} setArr={setArr} />
      <Box
        bgColor={bgButton}
        d="inline-flex"
        width="full"
        pos="relative"
        rounded="xl"
        my="4"
        className={!active ? "algos disabled" : "algos"}
        overflow="hidden"
        cursor="pointer"
      >
        <HStack w="full">
          {algoName.map((obj, ind) => {
            return (
              <Box
                width={`${100 / algoName.length}%`}
                padding={padSet}
                bgColor={algo == ind + 1 ? button : "transparent"}
                value={`${ind + 1}`}
                onClick={() => handleAlgo(ind + 1)}
                rounded="xl"
                fontWeight="bold"
                fontSize={fontSet}
                key={ind}
              >
                {obj}
              </Box>
            );
          })}
        </HStack>
      </Box>
      <Button
        fontWeight="bold"
        fontSize={{ sm: "lg", md: "2xl" }}
        d="block"
        w="full"
        mt="8"
        mb="4"
        colorScheme="whatsapp"
        disabled={active ? false : true}
        onClick={handleSort}
      >
        <Box d="inline-flex" justifyContent="center" alignItems="center">
          Sort
          <FaSortAmountUp />
        </Box>
      </Button>
    </Box>
  );
}

export default InputComp;
