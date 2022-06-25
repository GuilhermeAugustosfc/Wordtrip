import { Flex, SpaceProps } from "@chakra-ui/react";
import { Types } from "../Types";

import taca from "../../assets/taca.svg";
import praia from "../../assets/praia.svg";
import predio from "../../assets/predio.svg";
import museo from "../../assets/museo.svg";
import globo from "../../assets/globo.svg";

export function TravelTypes({ ...rest }: SpaceProps) {
  return (
    <Flex {...rest} justifyContent={"space-between"}>
      <Types text={"vida noturna"} svgPath={taca} />
      <Types text={"praia"} svgPath={praia} />
      <Types text={"moderno"} svgPath={predio} />
      <Types text={"classico"} svgPath={museo} />
      <Types text={"e mais..."} svgPath={globo} />
    </Flex>
  );
}
