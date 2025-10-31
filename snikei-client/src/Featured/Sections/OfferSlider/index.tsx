import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
const OfferSlider = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          className="category-swiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
        >
          <SwiperSlide>
            <div id="oneCard" className="rounded-2xl relative w-full">
              <div id="cardImg" className="relative w-full">
                <img
                  src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65381608ffd59aca70_Offer-Frame-one.png"
                  alt=""
                  className="w-screen h-auto object-contain border-5 rounded-2xl border-white"
                />
              </div>
              <div id="cardDesc" className="absolute top-6 left-7">
                <h5 className="text-[12px] font-bold text-black bg-white py-2 px-3 rounded-xl">
                  Weekend Offer
                </h5>
              </div>
              <div id="cardDesc" className="absolute bottom-6 left-7 w-60">
                <h1 className="text-[50px] font-bold text-white leading-12 mb-4">
                  10% OFF!
                </h1>
                <h1 className="text-[24px] font-bold text-white mb-1">
                  Refined Classics!
                </h1>
                <h1 className="text-[24px] font-bold text-white mb-1">
                  Imported from USA
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="oneCard" className="rounded-2xl relative w-full">
              <div id="cardImg" className="relative w-full">
                <img
                  src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65b2cc4aa2b920c790_Offer-Frame-three.png"
                  alt=""
                  className="w-screen h-auto object-contain border-5 rounded-2xl border-white"
                />
              </div>
              <div id="cardDesc" className="absolute top-6 left-7">
                <h5 className="text-[12px] font-bold text-black bg-white py-2 px-3 rounded-xl">
                  Weekend Offer
                </h5>
              </div>
              <div id="cardDesc" className="absolute bottom-6 left-7 w-60">
                <h1 className="text-[50px] font-bold text-white leading-12 mb-4">
                  10% OFF!
                </h1>
                <h1 className="text-[24px] font-bold text-white mb-1">
                  Refined Classics!
                </h1>
                <h1 className="text-[24px] font-bold text-white mb-1">
                  Imported from USA
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="oneCard" className="rounded-2xl relative w-full">
              <div id="cardImg" className="relative w-full">
                <img
                  src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68b1e77b54f68df313b432a4_offer-mobile-bg.png"
                  alt=""
                  className="w-screen h-auto object-contain border-5 rounded-2xl border-white"
                />
              </div>
              <div id="cardDesc" className="absolute top-6 left-7">
                <h5 className="text-[12px] font-bold text-black bg-white py-2 px-3 rounded-xl">
                  Weekend Offer
                </h5>
              </div>
              <div id="cardDesc" className="absolute bottom-6 left-7 w-60">
                <h1 className="text-[50px] font-bold text-white leading-12 mb-4">
                  10% OFF!
                </h1>
                <h1 className="text-[24px] font-bold text-white mb-1">
                  Refined Classics!
                </h1>
                <h1 className="text-[24px] font-bold text-white mb-1">
                  Imported from USA
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OfferSlider;
