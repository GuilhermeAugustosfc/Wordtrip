import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Navigate, useParams } from "react-router-dom";
import { BannerContinente } from "../../components/BannerContinente";
import { Biography } from "../../components/Biography";
import { CardCity } from "../../components/CardCity";
import { Header } from "../../components/Header";
import { InfoCity } from "../../components/InfoCity";
import { continenteData } from "../../pages/Continente/continentData";

export function Continente() {
  const { continent } = useParams<{
    continent:
      | "shoutAmerica"
      | "europe"
      | "asia"
      | "oceania"
      | "africa"
      | "nothAmerica";
  }>();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // ATENTADO DA MANOS FACA

  if (!continent) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <Header backButton isWideVersion={isWideVersion} />
      <BannerContinente
        continentImagePath={continenteData[continent].banner.path}
        continentTitle={continenteData[continent].title}
        isWideVersion={isWideVersion}
      />
      <Box
        mt={{
          lg: "80px",
          base: "36px",
        }}
        px={{
          lg: "140px",
          base: "16px",
        }}
      >
        <Flex
          gap={"70px"}
          flexWrap={{
            base: "wrap",
            lg: "nowrap",
          }}
        >
          <Biography text={continenteData[continent].info.bio} />
          <InfoCity
            linguaQtd={continenteData[continent].info.linguaQtd}
            countryQtd={continenteData[continent].info.countryQtd}
            cityQtd={continenteData[continent].info.cityQtd}
          />
        </Flex>

        <CardCity
          mb="35px"
          mt={"80px"}
          cards={continenteData[continent].city}
        />
      </Box>
    </Box>
  );
}
