import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <nav>
      <IconButton aria-label="Menu" icon={<HamburgerIcon />} />
    </nav>
  );
}

export default Navbar;
