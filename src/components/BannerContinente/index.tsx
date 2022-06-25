import { Box, Heading, Image } from "@chakra-ui/react";
interface BannerContinenteProps {
  continentImagePath: string;
  continentTitle: string;
}
export function BannerContinente({
  continentImagePath,
  continentTitle,
}: BannerContinenteProps) {
  return (
    <Box position={"relative"}>
      <Image
        maxH={"500px"}
        src={`/src/assets/${continentImagePath}.jpg`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        filter={"brightness(0.5)"}
        w="full"
      />
      <Heading left={"140px"} bottom={"59px"} pos={"absolute"}>
        {continentTitle}
      </Heading>
    </Box>
  );
}
