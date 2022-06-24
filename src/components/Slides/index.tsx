import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
interface SlidesProps {
  pathContinents: string;
  title: string;
  subtitle: string;
}
export function Slides({ title, pathContinents, subtitle }: SlidesProps) {
  return (
    <Flex justifyContent="center" alignItems={"center"} position={"relative"}>
      <Image
        height={"450px"}
        width={"100%"}
        src={pathContinents}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        filter={"brightness(0.6)"}
      />
      <Flex
        flexDirection={"column"}
        gap="16px"
        textAlign={"center"}
        position={"absolute"}
      >
        <Heading
          fontWeight={700}
          fontSize={"48px"}
          lineHeight={"72px"}
          textAlign={"center"}
          color={"lightHeadingAndText"}
        >
          {title}
        </Heading>
        <Text
          fontWeight={"700"}
          fontSize={"24px"}
          lineHeight={"36px"}
          textAlign={"center"}
          color={"info"}
        >
          {subtitle}
        </Text>
      </Flex>
    </Flex>
  );
}
