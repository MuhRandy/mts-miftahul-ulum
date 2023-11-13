import { Text, VStack } from '@chakra-ui/react';
import { teachers } from '../src/utils/utils';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Content from '../src/components/Content';

function StaffTeachers() {
  return (
    <Content title="Staff Guru">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <VStack>
              <Image
                src={teacher.url}
                alt="sdasas"
                className="w-[120px] object-cover"
              />
              <Text
                textAlign={'center'}
                fontSize={'medium'}
                fontWeight={'bold'}
                lineHeight={0}
                mt={3}
              >
                {teacher.nama}
              </Text>
              <Text textAlign={'center'} fontSize={'medium'}>
                ({teacher.jabatan})
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Content>
  );
}

export default StaffTeachers;
