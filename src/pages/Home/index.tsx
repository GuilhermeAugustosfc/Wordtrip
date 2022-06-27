import { Box, Divider, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "../../components/BannerHome";
import { ContainerSlide } from "../../components/ContainerSlide";
import { Header } from "../../components/Header";
import { TravelTypes } from "../../components/TravelTypes";

export function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Banner
        h={{
          lg: "368px",
          base: "auto",
        }}
        w={["auto", "full"]}
        isWideVersion={isWideVersion}
      />
      <TravelTypes
        isWideVersion={isWideVersion}
        mx={{ base: "auto", lg: "140px" }}
        mt={{ base: "36px", lg: "80px" }}
      />
      <Divider
        mt={"80px"}
        mb={"52px"}
        width={{
          base: "60px",
          lg: "100%",
        }}
        mx={{
          base: "auto",
        }}
      />
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

      <ContainerSlide
        mb={"40px"}
        mx={{
          lg: "100px",
          base: "0",
        }}
      />
    </Box>
  );
}
