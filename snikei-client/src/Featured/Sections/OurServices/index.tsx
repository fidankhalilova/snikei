const OurServices = () => {
  return (
    <div className="my-20 flex flex-col gap-20">
      <div id="ourServices" className="flex justify-between">
        <div id="one-service" className="w-[227px] flex flex-col gap-3">
          <div id="img-box">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6892144f750bf17c33b635e7_recycling-reproducing-svgrepo-com%201.svg"
              alt=""
            />
          </div>
          <div id="serviceText" className="flex flex-col gap-2">
            <h2 className="font-bold text-[20px]">Sustainable Materials</h2>
            <p className="font-normal text-[14px]">
              We believe great style shouldn’t come at the planet’s expense.
            </p>
          </div>
        </div>
        <div id="one-service" className="w-[227px] flex flex-col gap-3">
          <div id="img-box">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689214509e45233c0eac2f63_warranty-svgrepo-com%201.svg"
              alt=""
            />
          </div>
          <div id="serviceText" className="flex flex-col gap-2">
            <h2 className="font-bold text-[20px]">Warranty Included</h2>
            <p className="font-normal text-[14px]">
              Every pair comes with a hassle-free 6-month warranty
            </p>
          </div>
        </div>
        <div id="one-service" className="w-[227px] flex flex-col gap-3">
          <div id="img-box">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68921450b524ed88c4868689_delivery-fast-svgrepo.svg"
              alt=""
            />
          </div>
          <div id="serviceText" className="flex flex-col gap-2">
            <h2 className="font-bold text-[20px]">Delivery &amp; Shipping</h2>
            <p className="font-normal text-[14px]">
              Your shoes will be dispatched within 1–2 business days
            </p>
          </div>
        </div>
        <div id="one-service" className="w-[227px] flex flex-col gap-3">
          <div id="img-box">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6892144f566712d4d864a312_eco-friendly-svgrepo-com%201.svg"
              alt=""
            />
          </div>
          <div id="serviceText" className="flex flex-col gap-2">
            <h2 className="font-bold text-[20px]">Eco-Friendly Fabrics</h2>
            <p className="font-normal text-[14px]">
              Crafted with sustainability in mind, our shoes feature
              eco-friendly fabrics
            </p>
          </div>
        </div>
      </div>
      <div id="addCards" className="flex justify-between items-center">
        <div id="oneCard" className="rounded-2xl relative">
          <div id="cardImg" className="relative">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6dcb52275b4d9821578c_Explore-Left_frame.png"
              alt=""
              className="w-screen h-auto object-cover border-5 rounded-2xl border-white"
            />
          </div>
          <div id="cardDesc" className="absolute top-6 left-7">
            <h5 className="text-[12px] font-bold text-black bg-white py-2 px-3 rounded-xl">
              50% OFF
            </h5>
          </div>
          <div id="cardDesc" className="absolute bottom-6 left-7 w-60">
            <h1 className="text-[32px] font-bold text-white leading-12 mb-1">
              Explore All Formal Shoes
            </h1>
            <button className="flex justify-center items-center px-6 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-md border-2 border-yellow-800 hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_var(--color-yellow-800)] hover:shadow-[4px_4px_0_var(--colors-yellow-800)] hover:translate-x-0.5 hover:translate-y-0.5">
              Shop Now
            </button>
          </div>
        </div>
        <div id="oneCard" className="rounded-2xl relative">
          <div id="cardImg" className="relative">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6dcb52275b4d9821578c_Explore-Left_frame.png"
              alt=""
              className="w-screen h-auto object-cover border-5 rounded-2xl border-white"
            />
          </div>
          <div id="cardDesc" className="absolute top-6 left-7">
            <h5 className="text-[12px] font-bold text-black bg-white py-2 px-3 rounded-xl">
              50% OFF
            </h5>
          </div>
          <div id="cardDesc" className="absolute bottom-6 left-7 w-60">
            <h1 className="text-[32px] font-bold text-white leading-12 mb-1">
              Explore All Formal Shoes
            </h1>
            <button className="flex justify-center items-center px-6 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-md border-2 border-yellow-800 hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_var(--color-yellow-800)] hover:shadow-[4px_4px_0_var(--colors-yellow-800)] hover:translate-x-0.5 hover:translate-y-0.5">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
