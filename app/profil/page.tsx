"use client";

import {
  ChakraProvider,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import SchoolHistory from "../src/components/SchoolHistory";
import VisiMisi from "../src/components/VisiMisi";
import StaffTeachers from "../src/components/StaffTeachers";

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
