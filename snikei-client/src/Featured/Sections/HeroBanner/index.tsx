const HeroBanner = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891dcf26e965d2e8a4c0fef_hero-image.jpg"
            alt=""
            className="w-full h-240 object-cover"
          />
        </div>
        <div className="absolute z-3 top-50 right-18">
          <div className="container mx-auto px-12">
            <div className="flex flex-col items-center justify-between">
              <div className="p-3 bg-white">
                <div className="overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891ed3ee3d93ad17e2c0430_hero-product.jpg"
                    alt=""
                    className="hover:scale-[1.1] duration-500"
                  />
                </div>

                <h3 className="text-center mt-2">Explore New Arrivals</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-3 top-50 left-18">
          <div className="container mx-auto px-12">
            <div className="flex flex-col gap-4">
              <div className="w-100 leading-30 flex flex-col gap-8">
                <h1 className="text-[120px] font-bold text-white">
                  Explore Premium Shoes
                </h1>
                <div className="flex gap-5 h-15">
                  <button className="flex justify-center items-center px-6 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-md border-2 border-yellow-800 hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_var(--color-yellow-800)] hover:shadow-[4px_4px_0_var(--colors-yellow-800)] hover:translate-x-0.5 hover:translate-y-0.5">
                    Shop Now
                  </button>
                  <button className="flex justify-center items-center px-6 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-md border-2 border-yellow-800 hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_var(--color-yellow-800)] hover:shadow-[4px_4px_0_var(--colors-yellow-800)] hover:translate-x-0.5 hover:translate-y-0.5">
                    Categories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
