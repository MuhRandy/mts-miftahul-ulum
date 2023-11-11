import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className="flex justify-between bg-[#99fc08] mx-5 rounded-md">
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon color={'white'} />}
        onClick={onOpen}
        bg={'#99fc08'}
      />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <ul className="">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/profil">Profil</a>
              </li>
              <li>Berita dan Pengumuman</li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

export default Navbar;
