import {
  Link as ChakaraLink,
  Text,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../Active Link";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}
export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakaraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakaraLink>
    </ActiveLink>
  );
}
