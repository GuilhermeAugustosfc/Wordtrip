import { Box, Heading, HeadingProps, Image } from "@chakra-ui/react";
interface BannerContinenteProps {
  continentImagePath: string;
  continentTitle: string;
  isWideVersion?: boolean;
}
export function BannerContinente({
  continentImagePath,
  continentTitle,
  isWideVersion,
}: BannerContinenteProps) {
  const stylesWideScreen: HeadingProps = isWideVersion
    ? {
        left: "140px",
        bottom: "59px",
      }
    : {};
  const styleMobile: HeadingProps = isWideVersion
    ? {}
    : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

  return (
    <Box position={"relative"} {...styleMobile}>
      <Image
        maxH={{
          lg: "500px",
          base: "260px",
        }}
        src={`/src/assets/${continentImagePath}.jpg`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        filter={"brightness(0.8)"}
        w="full"
      />
      <Heading
        color={"lightHeadingAndText"}
        {...stylesWideScreen}
        pos="absolute"
      >
        {continentTitle}
      </Heading>
    </Box>
  );
}
