import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Slides } from "../Slides";
import { Navigation, Pagination } from "swiper";

import nothAmericaPath from "../../assets/noth-america.jpg";
import shoutAmeriaPath from "../../assets/south-america.jpg";
import europePath from "../../assets/europe.jpg";
import asiaPath from "../../assets/asia.jpg";
import oceaniaPath from "../../assets/oceania.jpg";
import africaPath from "../../assets/africa.jpg";
import { Box } from "@chakra-ui/react";

export function ContainerSlide() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Box mb={"40px"} mx="100px">
      <Swiper
        navigation={true}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slides
            pathContinents={europePath}
            title={"Europa"}
            subtitle={"O continente mais antigo."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            pathContinents={shoutAmeriaPath}
            title={"America do sul"}
            subtitle={"O continente mais acolhedor."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            pathContinents={africaPath}
            title={"Africa"}
            subtitle={"O continente mais guerreiro."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            pathContinents={asiaPath}
            title={"Asia"}
            subtitle={"O continente mais populoso."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            pathContinents={nothAmericaPath}
            title={"America do norte"}
            subtitle={"O continente mais conturbado."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            pathContinents={oceaniaPath}
            title={"Oceania"}
            subtitle={"O continente mais machucado."}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
