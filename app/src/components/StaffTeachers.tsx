import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { teachers } from "../utils/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function StaffTeachers() {
  return (
    <Box>
      <Heading size={"lg"} textAlign={"center"} mb={2}>
        Staff Guru
      </Heading>
      <Swiper slidesPerView={1}>
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <VStack>
              <Image
                src={teacher.url}
                alt="sdasas"
                className="w-[120px] object-cover"
              />
              <Text
                textAlign={"center"}
                fontSize={"medium"}
                fontWeight={"bold"}
                lineHeight={0}
                mt={3}
              >
                {teacher.nama}
              </Text>
              <Text textAlign={"center"} fontSize={"medium"}>
                ({teacher.jabatan})
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default StaffTeachers;
