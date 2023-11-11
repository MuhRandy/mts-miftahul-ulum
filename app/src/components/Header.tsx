import { Stack, Text } from "@chakra-ui/react";
import schoolLogo from "../assets/logo-mts.png";
import Image from "next/image";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Stack>
        <Stack direction={"row"} align={"center"}>
          <Image
            src={schoolLogo}
            alt="Logo MTs Miftahul Ulum"
            className="w-[20vw] h-[20vw]"
          />
          <Stack spacing={"0"}>
            <Text fontWeight={"bold"}>MTs Miftahul Ulum</Text>
            <Text fontSize={"small"} lineHeight={"15px"}>
              Desa Lok Buntar Kecamatan Sungai Tabuk Kabupaten Banjar
            </Text>
          </Stack>
        </Stack>
        <Navbar />
      </Stack>
    </header>
  );
}

export default Header;
