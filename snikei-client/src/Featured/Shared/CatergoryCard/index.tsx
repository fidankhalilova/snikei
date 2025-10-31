import React from "react";
import type { Category } from "../../../Types/category";

interface CategoryCardProps {
  category: Category;
  onClick?: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const { name, image } = category.attributes;

  const imageUrl = image.data?.attributes.url
    ? `${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}${
        image.data.attributes.url
      }`
    : "/placeholder-category.jpg";

  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  return (
    <div
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={image.data?.attributes.alternativeText || name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold text-center drop-shadow-lg">{name}</h3>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-opacity-50 rounded-lg transition-all duration-300" />
    </div>
  );
};

export default CategoryCard;
