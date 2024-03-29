import { Autoplay, Pagination, Scrollbar, Navigation, A11y } from 'swiper';
import { heroImgs } from "./heroSliderImgs";
import {
  SliderHeroContainer,
  SliderImg,
  SwiperContainer,
} from "./SliderImgsStyles";
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwipperStyles.css";
import "swiper/css/scrollbar";

const SliderImgs = ({ doScroll, scrollGen, scrollCat }) => {
  const slideToStore = (data) => {
    if (!data) return;
    else if (data === "store") {
      doScroll();
      return;
    } else if (data === "genre") {
      scrollGen();
      return;
    } else {
      scrollCat();
      return;
    }
  };

  return (
    <SliderHeroContainer>
      <SwiperContainer
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {heroImgs.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              cursor: `${slide.cursor ? "pointer" : "default"}`,
              boxShadow: '0px 10px 10px var(--shadows)'
            }}
            onClick={() => slideToStore(slide.category)}
          >
            <SliderImg src={slide.img} alt={slide.name} title={slide.title} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </SliderHeroContainer>
  );
};
export default SliderImgs;
