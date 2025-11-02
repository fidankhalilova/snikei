import React, { useState } from "react";

interface PriceRangeFilterProps {
  onPriceRangeChange: (min: number, max: number) => void;
  maxPrice?: number;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  onPriceRangeChange,
  maxPrice = 1000,
}) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPriceValue, setMaxPriceValue] = useState<number>(maxPrice);

  const priceRanges = [
    { label: "All Prices", min: 0, max: maxPrice },
    { label: "Under $100", min: 0, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 - $300", min: 200, max: 300 },
    { label: "$300 - $400", min: 300, max: 400 },
    { label: "$400 - $500", min: 400, max: 500 },
    { label: "$500+", min: 500, max: maxPrice },
  ];

  const handleRangeSelect = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPriceValue(max);
    onPriceRangeChange(min, max);
  };

  const handleCustomRange = () => {
    onPriceRangeChange(minPrice, maxPriceValue);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium text-gray-900">Price Range</h4>

      <div className="space-y-2">
        {priceRanges.map((range, index) => (
          <button
            key={index}
            onClick={() => handleRangeSelect(range.min, range.max)}
            className={`w-full text-left px-3 py-2 rounded-lg border transition-colors ${
              minPrice === range.min && maxPriceValue === range.max
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-900 mb-3">Custom Range</p>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-xs text-gray-600 mb-1">Min ($)</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded text-sm"
              min="0"
              max={maxPrice}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-600 mb-1">Max ($)</label>
            <input
              type="number"
              value={maxPriceValue}
              onChange={(e) => setMaxPriceValue(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded text-sm"
              min="0"
              max={maxPrice}
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleCustomRange}
              className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Selected: ${minPrice} - ${maxPriceValue}
      </div>
    </div>
  );
};

export default PriceRangeFilter;
