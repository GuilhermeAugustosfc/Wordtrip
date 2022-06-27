import { Flex, SpaceProps } from "@chakra-ui/react";
import { Types } from "../Types";

import taca from "../../assets/taca.svg";
import praia from "../../assets/praia.svg";
import predio from "../../assets/predio.svg";
import museo from "../../assets/museo.svg";
import globo from "../../assets/globo.svg";
import bolinhaAmarela from "../../assets/bolinha-amarela.svg";

interface TravelTypes extends SpaceProps {
  isWideVersion?: boolean;
}
export function TravelTypes({ isWideVersion, ...rest }: TravelTypes) {
  return (
    <Flex
      {...rest}
      justifyContent={{
        lg: "space-between",
        base: "center",
      }}
      gap={"28px"}
      flexWrap="wrap"
      width={{
        base: "65%",
        lg: "100%",
      }}
    >
      <Types
        text={"vida noturna"}
        svgPath={isWideVersion ? taca : bolinhaAmarela}
      />
      <Types text={"praia"} svgPath={isWideVersion ? praia : bolinhaAmarela} />
      <Types
        text={"moderno"}
        svgPath={isWideVersion ? predio : bolinhaAmarela}
      />
      <Types
        text={"classico"}
        svgPath={isWideVersion ? museo : bolinhaAmarela}
      />
      <Types
        text={"e mais..."}
        svgPath={isWideVersion ? globo : bolinhaAmarela}
      />
    </Flex>
  );
}
