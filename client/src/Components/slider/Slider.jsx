import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BikeData from "../../Data/BikeData";
import { Link } from "react-router-dom";

export const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full"
      >
        {BikeData.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <Link to={`/product/${item._id.$oid}`} key={item.id}>
                <div class="relative max-w-sm min-w-[340px] bg-white    rounded p-2 mx-1 my-3 cursor-pointer">
                  <div class="overflow-x-hidden rounded    relative">
                    <div className="h-48">
                      <img
                        class=" h-full rounded    "
                        src={item?.images[0]?.img1}
                      />
                    </div>
                  </div>
                  <div class="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                      <p class="text-lg font-semibold text-orange-600 mb-0">
                        Product Name
                      </p>
                      <p class="text-md text-orange-600  mt-0">$340</p>
                    </div>
                    <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 group-hover:opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <img
                src={`./image/bikeBG/bikeHero1.jpg`}
                className="w-full h-full"
              /> */}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
