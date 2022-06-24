import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Flex justifyContent="center" my={"6"} alignItems="center">
      <Image src={logo} />
    </Flex>
  );
}
