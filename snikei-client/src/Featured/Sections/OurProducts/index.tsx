import { MuiAccordion } from "../../Components/MuiAccordion";
import { useProducts } from "../../../hooks/useProducts";
import { useProductFilters } from "../../../hooks/useProductFilters";
import ProductCard from "../../Shared/ProductCard";
import { useMemo } from "react";

const OurProducts: React.FC = () => {
  const { products, loading, error, refetch } = useProducts();
  const {
    filters,
    filteredProducts,
    updateFilters,
    clearFilters,
    activeFilterCount,
  } = useProductFilters(products);

  const { availableCategories, availableColors, priceRanges } = useMemo(() => {
    const categories = Array.from(
      new Set(
        products.flatMap(
          (product) => product.categories?.map((cat) => cat.name) || []
        )
      )
    );

    const colors = Array.from(
      new Set(
        products.map((product) => product.color).filter(Boolean) as string[]
      )
    );

    const priceRanges = [
      "Under $100",
      "$100 - $200",
      "$200 - $300",
      "$300 - $400",
      "$400 - $500",
      "$500+",
    ];

    return {
      availableCategories: categories,
      availableColors: colors,
      priceRanges,
    };
  }, [products]);

  console.log("=== PRODUCTS DISPLAY DEBUG ===");
  console.log("Total products:", products.length);
  console.log("Filtered products to display:", filteredProducts.length);
  console.log("Active filters:", filters);
  console.log("Should show filtered?", activeFilterCount > 0);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 p-8">
        <div className="text-red-500 text-center mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
          <p className="mt-2 text-lg font-semibold">Error loading products</p>
          <p className="text-gray-600 mt-1">{error}</p>
        </div>
        <button
          onClick={refetch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  const productsToDisplay = activeFilterCount > 0 ? filteredProducts : products;

  return (
    <div>
      <div className="flex flex-col gap-10">
        <div id="productsHeading">
          <h1 className="text-[50px] text-center font-bold">
            Explore Products
            {activeFilterCount > 0 && (
              <span className="text-lg text-blue-500 ml-2">
                ({filteredProducts.length} of {products.length} products)
              </span>
            )}
          </h1>
        </div>

        {activeFilterCount > 0 && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.categories.map((category) => (
                <span
                  key={category}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  {category}
                  <button
                    onClick={() => updateFilters("categories", category)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
              {filters.priceRanges.map((range) => (
                <span
                  key={range}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  {range}
                  <button
                    onClick={() => updateFilters("priceRanges", range)}
                    className="text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              ))}
              {filters.colors.map((color) => (
                <span
                  key={color}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  {color}
                  <button
                    onClick={() => updateFilters("colors", color)}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
            >
              Clear All Filters
            </button>
          </div>
        )}

        <div id="products_filters" className="grid grid-cols-4 gap-6">
          <div id="filters" className="space-y-4">
            <MuiAccordion
              header={<div className="font-semibold text-lg">Categories</div>}
            >
              <div className="space-y-3 max-h-60 overflow-y-auto p-2">
                {availableCategories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => {
                        console.log("Toggling category:", category);
                        updateFilters("categories", category);
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 capitalize flex-1">
                      {category}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {
                        products.filter((p) =>
                          p.categories?.some((c) => c.name === category)
                        ).length
                      }
                    </span>
                  </label>
                ))}
              </div>
            </MuiAccordion>

            <MuiAccordion
              header={<div className="font-semibold text-lg">Price Ranges</div>}
            >
              <div className="space-y-3 p-2">
                {priceRanges.map((range) => (
                  <label
                    key={range}
                    className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={filters.priceRanges.includes(range)}
                      onChange={() => {
                        console.log("Toggling price range:", range);
                        updateFilters("priceRanges", range);
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 flex-1">{range}</span>
                  </label>
                ))}
              </div>
            </MuiAccordion>

            <MuiAccordion
              header={<div className="font-semibold text-lg">Colors</div>}
            >
              <div className="space-y-3 max-h-60 overflow-y-auto p-2">
                {availableColors.map((color) => (
                  <label
                    key={color}
                    className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={filters.colors.includes(color)}
                      onChange={() => {
                        console.log("Toggling color:", color);
                        updateFilters("colors", color);
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 capitalize flex-1">
                      {color}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {products.filter((p) => p.color === color).length}
                    </span>
                  </label>
                ))}
              </div>
            </MuiAccordion>
          </div>

          <div id="products" className="col-span-3">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                {activeFilterCount > 0 ? (
                  <>
                    Showing <strong>{filteredProducts.length}</strong> of{" "}
                    <strong>{products.length}</strong> products
                  </>
                ) : (
                  <>
                    Showing all <strong>{products.length}</strong> products
                  </>
                )}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {productsToDisplay.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {productsToDisplay.length === 0 && (
                <div className="col-span-3 text-center py-16">
                  <div className="text-gray-500 max-w-md mx-auto">
                    <svg
                      className="w-20 h-20 mx-auto mb-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">
                      {activeFilterCount > 0
                        ? "No products match your filters"
                        : "No products available"}
                    </h3>
                    {activeFilterCount > 0 && (
                      <>
                        <p className="mb-4">Try adjusting your filters or</p>
                        <button
                          onClick={clearFilters}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
                        >
                          Clear all filters
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
