import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
interface SlidesProps {
  pathContinents: string;
  title: string;
  subtitle: string;
}
export function Slides({ title, pathContinents, subtitle }: SlidesProps) {
  return (
    <Flex
      cursor={"pointer"}
      justifyContent="center"
      alignItems={"center"}
      position={"relative"}
    >
      <Image
        height={{
          lg: "450px",
          base: "250px",
        }}
        width={"100%"}
        src={pathContinents}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        filter={"brightness(0.6)"}
      />
      <VStack gap="16px" textAlign={"center"} position={"absolute"}>
        <Heading
          fontWeight={700}
          fontSize={{
            lg: "48px",
            base: "24px",
          }}
          lineHeight={"72px"}
          textAlign={"center"}
          color={"lightHeadingAndText"}
        >
          {title}
        </Heading>
        <Text
          fontWeight={"700"}
          fontSize={{
            lg: "24px",
            base: "14px",
          }}
          lineHeight={"36px"}
          textAlign={"center"}
          color={"info"}
        >
          {subtitle}
        </Text>
      </VStack>
    </Flex>
  );
}
