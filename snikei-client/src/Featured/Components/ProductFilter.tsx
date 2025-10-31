// components/ProductFilters.tsx
import React, { useState } from "react";
import type { Category } from "../../Types/product";
import PriceRangeFilter from "./PriceRangeFilter";

interface ProductFiltersProps {
  categories: Category[];
  onFiltersChange: (filters: {
    colors: string[];
    priceRange: [number, number];
    categories: string[];
  }) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  onFiltersChange,
}) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const colors = [
    { name: "red", code: "#DC2626" },
    { name: "blue", code: "#2563EB" },
    { name: "green", code: "#16A34A" },
    { name: "black", code: "#000000" },
    { name: "white", code: "#FFFFFF" },
    { name: "yellow", code: "#EAB308" },
    { name: "purple", code: "#9333EA" },
    { name: "pink", code: "#DB2777" },
    { name: "orange", code: "#EA580C" },
    { name: "gray", code: "#6B7280" },
  ];

  const handleColorToggle = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newColors);
    updateFilters({ colors: newColors });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    updateFilters({ priceRange: [min, max] });
  };

  const handleCategoryToggle = (categoryName: string) => {
    const newCategories = selectedCategories.includes(categoryName)
      ? selectedCategories.filter((c) => c !== categoryName)
      : [...selectedCategories, categoryName];

    setSelectedCategories(newCategories);
    updateFilters({ categories: newCategories });
  };

  const updateFilters = (updatedFilters: Partial<any>) => {
    onFiltersChange({
      colors: selectedColors,
      priceRange,
      categories: selectedCategories,
      ...updatedFilters,
    });
  };

  const clearAllFilters = () => {
    setSelectedColors([]);
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    onFiltersChange({
      colors: [],
      priceRange: [0, 1000],
      categories: [],
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          Clear All
        </button>
      </div>

      {/* Price Range Filter */}
      <PriceRangeFilter onPriceRangeChange={handlePriceRangeChange} />

      {/* Color Filter */}
      <div>
        <h4 className="font-medium mb-3">Colors</h4>
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorToggle(color.name)}
              className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all ${
                selectedColors.includes(color.name)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.code }}
              />
              <span className="text-xs mt-1 capitalize">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryToggle(category.name)}
                className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm capitalize">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedColors.length > 0 ||
        priceRange[0] > 0 ||
        priceRange[1] < 1000 ||
        selectedCategories.length > 0) && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Active Filters:
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedColors.length > 0 && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Colors: {selectedColors.length}
              </span>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 1000) && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Price: ${priceRange[0]} - ${priceRange[1]}
              </span>
            )}
            {selectedCategories.length > 0 && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Categories: {selectedCategories.length}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
