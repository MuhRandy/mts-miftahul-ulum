"use client";

import { ChakraProvider, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main";
import Article from "../src/components/Article";
import Content from "../src/components/Content";
import News from "../src/components/News";
import Articles from "../src/components/Articles";

function Profil() {
  return (
    <ChakraProvider>
      <Header />
      <Main>
        <VStack>
          <News />
          <Divider />
          <Articles />
        </VStack>
      </Main>
    </ChakraProvider>
  );
}

export default Profil;
