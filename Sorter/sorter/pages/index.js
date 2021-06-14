import { Heading, Link, Flex, Stack, Box } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Chart from "../components/main.components/Chart/Chart.component";
import InputComp from "../components/main.components/Input/Input.component";
import { useState } from "react";
import { ranArr } from "../components/Data/function";
export default function Home() {
  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="center"
      textAlign="center"
    >
      <Box width={{ sm: "80%", lg: "50%" }}>
        <Head>
          <title>Sorting Visualizer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Chart />
          <InputComp />
        </main>
      </Box>
    </Stack>
  );
}
