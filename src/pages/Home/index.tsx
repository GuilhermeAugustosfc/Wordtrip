import { Box, Divider, Heading } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { ContainerSlide } from "../../components/ContainerSlide";
import { Header } from "../../components/Header";
import { TravelTypes } from "../../components/TravelTypes";

export function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider mt={"80px"} mb={"52px"} />
      <Heading
        fontWeight={"500px"}
        fontSize={"36px"}
        lineHeight={"54px"}
        textAlign={"center"}
        color={"darkHeadingAndText"}
        mb="52px"
      >
        Vamos nessa? <br></br> Então escolha seu continente
      </Heading>

      <ContainerSlide />
    </Box>
  );
}
