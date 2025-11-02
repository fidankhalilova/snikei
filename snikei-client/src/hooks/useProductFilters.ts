import { useState, useMemo } from "react";
import type { Product } from "../Types/product";

interface ProductFilters {
  categories: string[];
  priceRanges: string[];
  colors: string[];
}

interface UseProductFiltersReturn {
  filters: ProductFilters;
  filteredProducts: Product[];
  updateFilters: (filterType: keyof ProductFilters, value: string) => void;
  clearFilters: () => void;
  activeFilterCount: number;
}

export const useProductFilters = (
  products: Product[]
): UseProductFiltersReturn => {
  const [filters, setFilters] = useState<ProductFilters>({
    categories: [],
    priceRanges: [],
    colors: [],
  });

  const filteredProducts = useMemo(() => {
    console.log("🔄 Filtering products...");
    console.log("Products count:", products.length);
    console.log("Active filters:", filters);

    if (
      filters.categories.length === 0 &&
      filters.priceRanges.length === 0 &&
      filters.colors.length === 0
    ) {
      console.log("No active filters, returning all products");
      return products;
    }

    const result = products.filter((product) => {
      let categoryMatch = true;
      let priceMatch = true;
      let colorMatch = true;

      if (filters.categories.length > 0) {
        const productCategories =
          product.categories?.map((cat) => cat.name) || [];
        categoryMatch = filters.categories.some((selectedCategory) =>
          productCategories.includes(selectedCategory)
        );
        console.log(
          `Product "${product.name}" category match:`,
          categoryMatch,
          {
            productCategories,
            selectedCategories: filters.categories,
          }
        );
      }

      if (filters.priceRanges.length > 0) {
        priceMatch = filters.priceRanges.some((range) => {
          const price = product.originalPrice;
          switch (range) {
            case "Under $100":
              return price < 100;
            case "$100 - $200":
              return price >= 100 && price <= 200;
            case "$200 - $300":
              return price >= 200 && price <= 300;
            case "$300 - $400":
              return price >= 300 && price <= 400;
            case "$400 - $500":
              return price >= 400 && price <= 500;
            case "$500+":
              return price >= 500;
            default:
              return true;
          }
        });
        console.log(`Product "${product.name}" price match:`, priceMatch, {
          price: product.originalPrice,
          selectedRanges: filters.priceRanges,
        });
      }

      if (filters.colors.length > 0) {
        colorMatch = !!product.color && filters.colors.includes(product.color);
        console.log(`Product "${product.name}" color match:`, colorMatch, {
          productColor: product.color,
          selectedColors: filters.colors,
        });
      }

      const finalMatch = categoryMatch && priceMatch && colorMatch;
      console.log(`Product "${product.name}" final match:`, finalMatch);

      return finalMatch;
    });

    console.log("✅ Filtering complete. Results:", result.length);
    console.log("Filtered products:", result);
    return result;
  }, [products, filters]);

  const updateFilters = (filterType: keyof ProductFilters, value: string) => {
    console.log("🎯 Updating filter:", filterType, value);
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const newFilters = {
        ...prev,
        [filterType]: newValues,
      };

      console.log("🆕 New filter state:", newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    console.log("🧹 Clearing all filters");
    setFilters({
      categories: [],
      priceRanges: [],
      colors: [],
    });
  };

  const activeFilterCount =
    filters.categories.length +
    filters.priceRanges.length +
    filters.colors.length;

  return {
    filters,
    filteredProducts,
    updateFilters,
    clearFilters,
    activeFilterCount,
  };
};
