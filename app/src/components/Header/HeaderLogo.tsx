import { Stack, Text } from "@chakra-ui/react";
import schoolLogo from "../../assets/logo-mts.png";
import Image from "next/image";
import clsx from "clsx";

const HeaderLogo = () => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Image
        src={schoolLogo}
        alt="Logo MTs Miftahul Ulum"
        className={clsx("w-[60px]", ["min-[480px]:w-[80px]"])}
      />
      <Stack spacing={"0"}>
        <Text fontWeight={"bold"} fontSize={{ sm: "x-large" }}>
          MTs Miftahul Ulum
        </Text>
        <Text fontSize={{ base: "small", sm: "medium" }} lineHeight={1}>
          Desa Lok Buntar Kecamatan Sungai Tabuk Kabupaten Banjar
        </Text>
      </Stack>
    </Stack>
  );
};

export default HeaderLogo;
