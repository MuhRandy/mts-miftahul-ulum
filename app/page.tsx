'use client';

import Article from './src/components/Article';
import Header from './src/components/Header/Header';
import { ChakraProvider, Wrap, WrapItem } from '@chakra-ui/react';
import Main from './src/components/Main';

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Main>
        <Wrap justify={'center'}>
          <WrapItem>
            <Article />
          </WrapItem>
          <WrapItem>
            <Article />
          </WrapItem>
          <WrapItem>
            <Article />
          </WrapItem>
          <WrapItem>
            <Article />
          </WrapItem>
          <WrapItem>
            <Article />
          </WrapItem>
          <WrapItem>
            <Article />
          </WrapItem>
        </Wrap>
      </Main>
    </ChakraProvider>
  );
}
