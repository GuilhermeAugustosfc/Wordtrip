import { Text } from "@chakra-ui/react";
interface BiographyProps {
  text: string;
}
export function Biography({ text }: BiographyProps) {
  return (
    <Text
      fontWeight={"400"}
      fontSize={"24px"}
      lineHeight={"36px"}
      textAlign={"justify"}
      color={"darkHeadingText"}
    >
      {text}
    </Text>
  );
}
