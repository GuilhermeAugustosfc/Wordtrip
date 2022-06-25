import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Airplane from "../../assets/airplane.svg";
export function Banner() {
  return (
    <Box h={"368px"}>
      <Flex
        backgroundImage={"url(/src/assets/background.png)"}
        px="32"
        pt="20"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        w="full"
        justifyContent={"space-between"}
        h={"335px"}
      >
        <VStack gap="5">
          <Heading
            fontWeight={500}
            fontSize={"36px"}
            lineHeight={"54px"}
            color={"lightHeadingAndText"}
            w={"426px"}
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            w={"524px"}
            fontWeight={400}
            fontSize={"20px"}
            lineHeight={"20px"}
            color={"lightInfo"}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </VStack>
        <Image
          w={"417.15px"}
          h={"270.74px"}
          transform="auto"
          rotate={"3deg"}
          src={Airplane}
        />
      </Flex>
    </Box>
  );
}
