import React from "react";
import type { Product } from "../../../Types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, image, originalPrice, discountPrice, color, categories } =
    product;

  const imageUrl = image?.url
    ? `${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}${
        image.url
      }`
    : "/placeholder-image.jpg";

  const hasDiscount = discountPrice && discountPrice < originalPrice;

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={image?.alternativeText || name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {hasDiscount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            Sale
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>

        {color && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">Color:</span>
            <span className="text-sm font-medium capitalize">{color}</span>
          </div>
        )}

        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {categories.map((category) => (
              <span
                key={category.id}
                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-xl font-bold text-red-600">
                {formatPrice(discountPrice)}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
              <span className="text-sm text-red-600 font-medium">
                Save {formatPrice(originalPrice - discountPrice)}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
