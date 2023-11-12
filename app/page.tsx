"use client";

import Article from "./src/components/Article";
import Header from "./src/components/Header";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import Main from "./src/components/Main";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Main>
        <Stack spacing={3}>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </Stack>
      </Main>
    </ChakraProvider>
  );
}
