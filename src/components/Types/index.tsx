import { Flex, Image, Text } from "@chakra-ui/react";

interface TypesProps {
  text: string;
  svgPath: string;
}
export function Types({ text, svgPath }: TypesProps) {
  return (
    <Flex
      flexDirection={"column"}
      gap={"24px"}
      justifyContent={"center"}
      alignItems="center"
    >
      <Image w={"85px"} h={"85px"} src={svgPath} />
      <Text
        fontWeight={600}
        fontSize={"24px"}
        lineHeight={"36px"}
        textAlign={"center"}
        color={"darkHeadingAndText"}
      >
        {text}
      </Text>
    </Flex>
  );
}