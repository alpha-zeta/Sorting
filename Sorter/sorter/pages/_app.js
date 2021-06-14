import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Chakra } from "../src/Chakra";
import theme from "../Theme/theme";
import Layout from "../components/main.components/Layout/Layout.components";
import ArrProvider from "../components/Context/arrContext.context";
function MyApp({ Component, pageProps }) {
  return (
    <Chakra>
      <CSSReset />
      <ArrProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ArrProvider>
    </Chakra>
  );
}

export default MyApp;
export { getServerSideProps } from "../src/Chakra";
