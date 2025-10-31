import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useCategories } from "../../../hooks/useCategories";

import "swiper/swiper-bundle.css";

const CategorySlider: React.FC = () => {
  const { categories, loading, error } = useCategories();

  const getCategoryName = (category: any): string => {
    return category?.attributes?.name || category?.name || "Unnamed Category";
  };

  const getCategoryImage = (category: any): any => {
    return category?.attributes?.image || category?.image;
  };

  if (loading) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500">Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            <p>Error loading categories: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500">No categories available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-40 mb-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[50px] font-bold text-gray-900">
            Our Categories
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          className="category-swiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
        >
          {categories.map((category, index) => {
            const name = getCategoryName(category);
            const image = getCategoryImage(category);

            const imageUrl = image?.data?.attributes?.url
              ? `http://localhost:1337${image.data.attributes.url}`
              : image?.url
              ? `http://localhost:1337${image.url}`
              : null;

            return (
              <SwiperSlide key={category.id || index}>
                <div className="text-center group cursor-pointer w-full">
                  {imageUrl && (
                    <div className="w-full aspect-square mx-auto mb-4 rounded-3xl overflow-hidden border-2 border-gray-200 group-hover:border-gray-500 transition-colors duration-300">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                    {name}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
