import { Box, Flex, Heading, Image, LayoutProps, Text } from "@chakra-ui/react";
import Airplane from "../../assets/airplane.svg";
interface BannerProps extends LayoutProps {
  isWideVersion?: boolean;
}
export function Banner({ isWideVersion, ...rest }: BannerProps) {
  return (
    <Box {...rest}>
      <Flex
        backgroundImage={"url(/src/assets/background.png)"}
        px={{
          sm: "16px",
          lg: "32",
        }}
        pt={{
          lg: "20",
          sm: "28px",
        }}
        pb={{
          sm: "28px",
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        w={{ lg: "full" }}
        justifyContent={"space-between"}
      >
        <Flex flexDir={"column"} gap="5" w={"100%"}>
          <Heading
            fontWeight={600}
            fontSize={"36px"}
            lineHeight={"54px"}
            color={"lightHeadingAndText"}
            w={{ sm: "100%" }}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            w={"524px"}
            fontWeight={400}
            fontSize={"20px"}
            lineHeight={{ sm: "36px", lg: "20px" }}
            color={"lightInfo"}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Flex>
        {isWideVersion && (
          <Image
            w={"417.15px"}
            h={"270.74px"}
            transform="auto"
            rotate={"3deg"}
            src={Airplane}
          />
        )}
      </Flex>
    </Box>
  );
}
