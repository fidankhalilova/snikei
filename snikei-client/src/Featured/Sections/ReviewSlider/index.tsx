import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div id="review" className="flex gap-4">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg"
                alt=""
                className="w-56 h-[297px] object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border border-gray-100 p-6 max-w-sm w-full">
              <p className="text-gray-700 text-[18px] font-semibold leading-relaxed mb-4 line-clamp-4">
                "Finding shoes that fit well is always a struggle for me. But
                here, the sizing guide was spot on and the shoes feel
                custom-made. Highly recommend!"
              </p>

              <div className="flex gap-5 mt-13 items-center">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                    className="rounded-full w-20"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[17px] text-sm mb-2">
                    Mason Jack
                  </p>

                  <div className="flex text-yellow-400 gap-1 text-[12px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="flex gap-4">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg"
                alt=""
                className="w-56 h-[297px] object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border border-gray-100 p-6 max-w-sm w-full">
              <p className="text-gray-700 text-[18px] font-semibold leading-relaxed mb-4 line-clamp-4">
                "Finding shoes that fit well is always a struggle for me. But
                here, the sizing guide was spot on and the shoes feel
                custom-made. Highly recommend!"
              </p>

              <div className="flex gap-5 mt-13 items-center">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                    className="rounded-full w-20"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[17px] text-sm mb-2">
                    Mason Jack
                  </p>

                  <div className="flex text-yellow-400 gap-1 text-[12px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="flex gap-4">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg"
                alt=""
                className="w-56 h-[297px] object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border border-gray-100 p-6 max-w-sm w-full">
              <p className="text-gray-700 text-[18px] font-semibold leading-relaxed mb-4 line-clamp-4">
                "Finding shoes that fit well is always a struggle for me. But
                here, the sizing guide was spot on and the shoes feel
                custom-made. Highly recommend!"
              </p>

              <div className="flex gap-5 mt-13 items-center">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                    className="rounded-full w-20"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[17px] text-sm mb-2">
                    Mason Jack
                  </p>

                  <div className="flex text-yellow-400 gap-1 text-[12px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="flex gap-4">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg"
                alt=""
                className="w-56 h-[297px] object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border border-gray-100 p-6 max-w-sm w-full">
              <p className="text-gray-700 text-[18px] font-semibold leading-relaxed mb-4 line-clamp-4">
                "Finding shoes that fit well is always a struggle for me. But
                here, the sizing guide was spot on and the shoes feel
                custom-made. Highly recommend!"
              </p>

              <div className="flex gap-5 mt-13 items-center">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                    className="rounded-full w-20"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[17px] text-sm mb-2">
                    Mason Jack
                  </p>

                  <div className="flex text-yellow-400 gap-1 text-[12px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="flex gap-4">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg"
                alt=""
                className="w-56 h-[297px] object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border border-gray-100 p-6 max-w-sm w-full">
              <p className="text-gray-700 text-[18px] font-semibold leading-relaxed mb-4 line-clamp-4">
                "Finding shoes that fit well is always a struggle for me. But
                here, the sizing guide was spot on and the shoes feel
                custom-made. Highly recommend!"
              </p>

              <div className="flex gap-5 mt-13 items-center">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                    className="rounded-full w-20"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[17px] text-sm mb-2">
                    Mason Jack
                  </p>

                  <div className="flex text-yellow-400 gap-1 text-[12px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="flex gap-4">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg"
                alt=""
                className="w-56 h-[297px] object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border border-gray-100 p-6 max-w-sm w-full">
              <p className="text-gray-700 text-[18px] font-semibold leading-relaxed mb-4 line-clamp-4">
                "Finding shoes that fit well is always a struggle for me. But
                here, the sizing guide was spot on and the shoes feel
                custom-made. Highly recommend!"
              </p>

              <div className="flex gap-5 mt-13 items-center">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                    className="rounded-full w-20"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-[17px] text-sm mb-2">
                    Mason Jack
                  </p>

                  <div className="flex text-yellow-400 gap-1 text-[12px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
