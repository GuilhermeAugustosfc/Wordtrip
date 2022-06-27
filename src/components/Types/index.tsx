import { Flex, Image, Text, VStack } from "@chakra-ui/react";

interface TypesProps {
  text: string;
  svgPath: string;
}

export function Types({ text, svgPath }: TypesProps) {
  return (
    <Flex
      flexDir={{
        lg: "column",
        base: "row",
      }}
      gap={"24px"}
      justifyContent={"center"}
      alignItems="center"
    >
      <Image
        w={{
          lg: "85px",
          base: "8px",
        }}
        h={{
          lg: "85px",
          base: "8px",
        }}
        src={svgPath}
      />
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
