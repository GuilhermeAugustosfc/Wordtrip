import { Flex } from "@chakra-ui/react";
import { Types } from "../Types";

import taca from "../../assets/taca.svg";
import praia from "../../assets/praia.svg";
import predio from "../../assets/predio.svg";
import museo from "../../assets/museo.svg";
import globo from "../../assets/globo.svg";

export function TravelTypes() {
  return (
    <Flex mx={"140px"} mt={"80px"} justifyContent={"space-between"}>
      <Types text={"vida noturna"} svgPath={taca} />
      <Types text={"praia"} svgPath={praia} />
      <Types text={"moderno"} svgPath={predio} />
      <Types text={"classico"} svgPath={museo} />
      <Types text={"e mais..."} svgPath={globo} />
    </Flex>
  );
}
