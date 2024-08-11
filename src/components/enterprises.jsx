import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "logo01.svg",
  "logo02.svg",
  "logo03.svg",
  "logo04.svg",
  "logo05.svg",
  "logo06.svg",
];

function Enterprises() {
  return (
    <>
      <div className="mx-40 my-10 grid grid-cols-6 gap-6 max-md:mx-8 max-md:hidden">
        <img src="/images/team-logo/logo01.svg" alt="logo de empresas" />
        <img src="/images/team-logo/logo02.svg" alt="logo de empresas" />
        <img src="/images/team-logo/logo03.svg" alt="logo de empresas" />
        <img src="/images/team-logo/logo04.svg" alt="logo de empresas" />
        <img src="/images/team-logo/logo05.svg" alt="logo de empresas" />
        <img src="/images/team-logo/logo06.svg" alt="logo de empresas" />
      </div>

      <Swiper
        slidesPerView={2.5}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        className="mySwiper flex ml-8 md:hidden py-6"
      >
        {images.map((images, index) => (
          <SwiperSlide key={index}>
            <img src={`/images/team-logo/${images}`} alt="logo de empresas" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Enterprises;
