import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWindowVersion = useBreakpointValue({
    base: false,
    xl: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      marginTop="4"
      alignItems="center"
      px="6"
    >
      {!isWindowVersion && (
        <IconButton
          aria-label="open"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWindowVersion && <SearchBox />}
      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWindowVersion} />
      </Flex>
    </Flex>
  );
}
