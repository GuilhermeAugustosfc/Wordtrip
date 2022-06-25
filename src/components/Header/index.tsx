import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import buttonBack from "../../assets/buttonBack.svg";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  backButton?: boolean;
}
export function Header({ backButton = false }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <Flex px="140px" my={"6"} alignItems="center">
      {backButton && (
        <Image
          cursor={"pointer"}
          src={buttonBack}
          onClick={() => navigate("/")}
        />
      )}
      <Image display={"block"} margin="0 auto" src={logo} />
    </Flex>
  );
}
