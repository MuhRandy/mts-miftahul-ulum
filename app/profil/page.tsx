'use client';

import { ChakraProvider, Divider, Stack } from '@chakra-ui/react';
import Header from '../src/components/Header/Header';
import Main from '../src/components/Main';
import SchoolHistory from './SchoolHistory';
import VisiMisi from './VisiMisi';
import StaffTeachers from './StaffTeachers';

function Profil() {
  return (
    <ChakraProvider>
      <Header />
      <Main>
        <Stack spacing={5}>
          <SchoolHistory />
          <Divider />
          <VisiMisi />
          <StaffTeachers />
        </Stack>
      </Main>
    </ChakraProvider>
  );
}

export default Profil;
