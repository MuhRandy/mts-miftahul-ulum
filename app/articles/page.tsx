'use client';

import { ChakraProvider, Divider, Stack, Text, VStack } from '@chakra-ui/react';
import Header from '../src/components/Header/Header';
import Main from '../src/components/Main';
import News from './News';
import Articles from './Articles';

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
