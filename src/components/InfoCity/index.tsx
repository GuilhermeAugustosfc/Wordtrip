import { Box, Flex, Text, VStack } from "@chakra-ui/react";

interface InfoCityProps {
  countryQtd: number;
  linguaQtd: number;
  cityQtd: number;
}
export function InfoCity({ countryQtd, cityQtd, linguaQtd }: InfoCityProps) {
  function InfoLabel({ value, info }: { value: number; info: string }) {
    return (
      <VStack>
        <Box fontWeight={"600"} textAlign={"center"}>
          <Text fontSize={"48px"} lineHeight={"72px"} color={"highlight"}>
            {value}
          </Text>
          <Text
            fontSize={"24px"}
            lineHeight={"36px"}
            textAlign={"center"}
            color={"darkHeadingText"}
          >
            {info}
          </Text>
        </Box>
      </VStack>
    );
  }

  return (
    <Flex alignItems={"center"} gap={"42px"}>
      <InfoLabel value={countryQtd} info={"Paises"} />
      <InfoLabel value={linguaQtd} info={"Linguas"} />
      <InfoLabel value={cityQtd} info={"Cidades"} />
    </Flex>
  );
}
