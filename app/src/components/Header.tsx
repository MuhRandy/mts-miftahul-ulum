import { Stack, Text } from '@chakra-ui/react';
import schoolLogo from '../assets/logo-mts.png';
import depanMts from '../assets/foto_depan_mts.jpg';
import Image from 'next/image';
import Navbar from './Navbar';
import clsx from 'clsx';

function Header() {
  return (
    <header>
      <Stack>
        <Stack direction={'row'} align={'center'}>
          <Image
            src={schoolLogo}
            alt="Logo MTs Miftahul Ulum"
            className="w-[20vw] h-[20vw]"
          />
          <Stack spacing={'0'}>
            <Text fontWeight={'bold'}>MTs Miftahul Ulum</Text>
            <Text fontSize={'small'} lineHeight={'15px'}>
              Desa Lok Buntar Kecamatan Sungai Tabuk Kabupaten Banjar
            </Text>
          </Stack>
        </Stack>
        <Navbar />
        <div className="relative bottom-7 z-[-1]">
          <Image
            src={depanMts}
            alt="Foto Tampak Depan MTs Miftahul Ulum"
            className={clsx('w-full h-[100px]', 'object-cover object-center')}
          />
          <div
            className={clsx(
              'bg-black opacity-50 w-full h-[100px]',
              'absolute top-0',
              'flex items-center justify-center',
              'text-center text-xl font-bold text-white'
            )}
          >
            Selamat Datang di Website Miftahul Ulum
          </div>
        </div>
      </Stack>
    </header>
  );
}

export default Header;
