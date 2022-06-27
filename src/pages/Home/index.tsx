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
          sm: "auto",
        }}
        w={["fit-content", "full"]}
        isWideVersion={isWideVersion}
      />
      <TravelTypes
        isWideVersion={isWideVersion}
        mx={{ sm: "auto", lg: "140px" }}
        mt={{ sm: "36px", lg: "80px" }}
      />
      <Divider
        mt={"80px"}
        mb={"52px"}
        width={{
          sm: "60px",
          lg: "100%",
        }}
        mx={{
          sm: "auto",
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
          sm: "0",
        }}
      />
    </Box>
  );
}
