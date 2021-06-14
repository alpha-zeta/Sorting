import React, { useState } from "react";
import {
  Slider,
  Box,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  Button,
} from "@chakra-ui/react";
import { ranArr } from "../../Data/function";
function SliderComp(props) {
  const [slider, setSlider] = useState(50);
  const handleArr = (e) => {
    const arr = ranArr(e);
    setSlider(e);
    props.setArr([...arr]);
  };
  return (
    <Box pos="relative" w="full" d="inline-flex" mb="4">
      <Slider
        aria-label="slider-ex-4"
        defaultValue={50}
        min={0}
        max={200}
        onChange={(val) => handleArr(val)}
        d="inline-block"
        w="-webkit-fill-available"
        mr="4"
        disabled={!props.active}
      >
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="tomato" />
        </SliderThumb>
      </Slider>
      <Button
        w="100px"
        colorScheme="blue"
        disabled
        id="sliderVal"
        d="inline-block"
      >
        {slider}
      </Button>
    </Box>
  );
}

export default SliderComp;
