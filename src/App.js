import * as React from "react";

import { ChakraProvider, HStack, Link, Text, VStack } from "@chakra-ui/react";
import OpenModal from "./components/OpenModal";
import CardExample from "./components/CardExample";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function MenuItem({ areaName }) {
  return <Link href={"/#" + areaName}>{capitalize(areaName)}</Link>;
}

function App() {
  return (
    <ChakraProvider>
      <HStack>
        <VStack bg="gray.200" width="20vw" height="100vh">
          <MenuItem areaName="home" />
          <MenuItem areaName="farms" />
          <MenuItem areaName="fields" />
          <MenuItem areaName="reports" />
        </VStack>
        <VStack bg="blue.200" width="80vw" height="100vh">
          <Text height="large">Hello World</Text>
          <OpenModal />
          <CardExample />
        </VStack>
      </HStack>
    </ChakraProvider>
  );
}

export default App;
