import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../Shared/ProductCard";

const NewArrivals = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="flex flex-col gap-10 my-20">
        <div id="productsHeading">
          <h1 className="text-[50px] text-center font-bold">
            Explore Products
          </h1>
        </div>
        <div id="products" className="grid grid-cols-4 gap-4">
          {products.map(
            (product) => (
              console.log(product),
              (<ProductCard key={product.id} product={product} />)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
