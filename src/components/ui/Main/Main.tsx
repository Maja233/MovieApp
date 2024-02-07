import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Main = () => {
  return (
    <div className=" col-[2] grid grid-rows-[repeat(2,auto_1fr)] gap-5 bg-bg p-10">
      <div className="flex items-end gap-3">
        <h2 className="text-2xl text-white">Trending Movies</h2>
        <a className="font-semibold text-cta" href="#">
          Explore All
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        navigation
        breakpoints={{
          '0': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '390': {
            slidesPerView: 2,
          },
          '640': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 4,
          },
          '992': {
            slidesPerView: 5,
          },
          '1200': {
            slidesPerView: 6,
          },
          '1400': {
            slidesPerView: 7,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="grid">
          <button className="h-full cursor-pointer">
            <img
              className="h-full object-cover"
              src="https://media.discordapp.net/attachments/1201541530234658886/1203845116079644672/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg?ex=65d29322&is=65c01e22&hm=6205147955d5918df31f5c44e7204f7a742534eaff03d6e7d84141fa891291cf&=&format=webp"
              alt=""
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Main;
