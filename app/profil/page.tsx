'use client';

import {
  Card,
  ChakraProvider,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Header from '../src/components/Header';
import { register } from 'swiper/element/bundle';
import kursi from '../src/assets/jejeran_kursi.jpg';
import Image from 'next/image';
import { teachers } from '../src/utils/utils';

register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function Profil() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <Stack spacing={5}>
          <Container>
            <Heading size={'lg'}>Sejarah Sekolah</Heading>
            <Text fontSize={'xs'}>
              MTs Miftahul Ulum adalah sekolah swasta menengah pertama yang
              berada di Desa Lok Buntar, Kecamatan Sungai Tabuk, Kabupaten
              Banjar, Provinsi Kalimantan Selatan, dimana sekolah ini didirikan
              pada tahun 1976. Sejak saat itu pergantian pimpinan sekolah dapat
              diurutkan sebagai berikut :
            </Text>
            <OrderedList fontSize={'xs'}>
              <ListItem>H. Majedi Hasan (1976 sd. 1978)</ListItem>
              <ListItem>H. Jamhuri (1979 sd. 1986)</ListItem>
              <ListItem>H. Majedi Hasan (1987 sd. 2000)</ListItem>
              <ListItem>Pauji Abdullah A.Md (2000 sd. 2007)</ListItem>
              <ListItem>Abdusani S.pd (2007 sd. Sekarang)</ListItem>
            </OrderedList>
          </Container>
          <Divider />
          <Container>
            <Heading size={'lg'}>Visi & Misi Sekolah</Heading>
            <Container>
              <Heading size={'md'}>Visi</Heading>
              <Divider />
              <Text fontSize={'xs'} fontWeight={'bold'}>
                ”Terbentuknya Siswa yang Beriman dan Bertaqwa Kepada Allah Swt.,
                Berilmu Pengetahuan dan Keterampilan Serta Mempunyai Wawasan dan
                Kesadaran Terhadap Diri dan Lingkungan”
              </Text>
            </Container>
            <Container>
              <Heading size={'md'} mt={3}>
                Misi
              </Heading>
              <Divider />
              <Text fontSize={'xs'}>
                Untuk mencapai Visi dimaksud perlu dilakukan suatu Misi berupa
                kegiatan jangka panjang dengan arah yang jelas dan sistematis.
              </Text>
              <Text fontSize={'xs'}>
                Berikut Misi MTs. Miftahul Ulum Sungai Tabuk :
              </Text>
              <OrderedList fontSize={'xs'}>
                <ListItem>
                  Menanamkan keyakinan / Aqidah agama melalui :
                  <UnorderedList>
                    <ListItem>Pendidikan Ilmu Tauhid</ListItem>
                    <ListItem>
                      Pendidikan dan Bimbingan Ibadah Salat (Salat Wajib dan
                      Sunnah)
                    </ListItem>
                    <ListItem>Pendidikan Al Qur’an dan Maulidurrasul</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  Mengoptimalkan proses pembelajaran dan bimbingan secara
                  efektif dan efesien.
                </ListItem>
                <ListItem>
                  Mengembangkan pengetahuan di bidang IPTEK, Bahasa, Olah Raga
                  dan Seni Budaya sesuai dengan bakat, minat dan potensi siswa.
                </ListItem>
              </OrderedList>
            </Container>
          </Container>
          <div>
            <Heading size={'lg'}>Staff Guru</Heading>
            <swiper-container slides-per-view="1">
              {teachers.map((teacher, index) => (
                <swiper-slide key={index}>
                  <div className="flex flex-col items-center">
                    <Image
                      src={teacher.url}
                      alt="sdasas"
                      className="w-[100px] object-cover"
                    />
                    <Text textAlign={'center'} fontSize={'smaller'}>
                      {teacher.nama}
                    </Text>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </Stack>
      </main>
    </ChakraProvider>
  );
}

export default Profil;
