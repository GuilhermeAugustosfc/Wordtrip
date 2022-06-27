import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import buttonBack from "../../assets/button-back.svg";
import buttonBackMobile from "../../assets/button-back-mobile.svg";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  backButton?: boolean;
  isWideVersion?: boolean;
}
export function Header({ backButton = false, isWideVersion }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <Flex
      px={{
        md: "140px",
        sm: buttonBack ? "16px" : "147px",
      }}
      my={"6"}
      alignItems="center"
    >
      {backButton && (
        <Image
          cursor={"pointer"}
          src={isWideVersion ? buttonBack : buttonBackMobile}
          onClick={() => navigate("/")}
        />
      )}
      <Image fontSize={["20"]} display={"block"} margin="0 auto" src={logo} />
    </Flex>
  );
}
