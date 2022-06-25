import {
  Box,
  Flex,
  Heading,
  Image,
  SpaceProps,
  Text,
  VStack,
} from "@chakra-ui/react";

type Card = {
  cityImagePath: string;
  cityName: string;
  countryImagePath: string;
  countryName: string;
};
interface CardCityProps extends SpaceProps {
  cards: Card[];
}
export function CardCity({ cards, ...rest }: CardCityProps) {
  return (
    <Box {...rest}>
      <Heading
        fontWeight={"500"}
        fontSize={"36px"}
        lineHeight={"54px"}
        textAlign={"right"}
        color={"darkHeadingText"}
        mb={"40px"}
      >
        Cidades +100
      </Heading>
      <Flex gap={"45px"} flexWrap="wrap" justifyContent={"space-between"}>
        {cards.map((card, i) => (
          <VStack borderRadius={"4px 4px 4px 4px"} key={i}>
            <Image
              borderRadius={"4px 4px 0 0"}
              width={"256px"}
              height={"173px"}
              src={`/src/assets/${card.cityImagePath}.jpg`}
            />
            <Flex
              pt={"18px"}
              px={"24px"}
              pb={"25px"}
              backgroundColor={"lightWhite"}
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <VStack gap={"12px"}>
                <Text
                  fontWeight={"600"}
                  fontSize={"20px"}
                  lineHeight={"25px"}
                  color={"darkHeadingText"}
                >
                  {card.cityName}
                </Text>
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  lineHeight={"26px"}
                  color={"darkInfo"}
                >
                  {card.countryName}
                </Text>
              </VStack>
              <Image
                width={"30px"}
                height={"30px"}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                borderRadius={"full"}
                src={`/src/assets/${card.countryImagePath}.jpg`}
              />
            </Flex>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
}
