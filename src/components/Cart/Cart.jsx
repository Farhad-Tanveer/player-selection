import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="w-full bg-secondar text-black">
        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
          <div>
            <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800">
              Summary
            </p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-800 ">
                Selected Player:{" "}
              </p>
              <p className="text-base leading-none text-gray-800 ">00</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 ">
                Subtotal:{" "}
              </p>
              <p className="text-base leading-none text-gray-800 ">000</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 ">Name:</p>
              <p className="text-base leading-none text-gray-800 ">
                Tamin Iqbal
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
              <p className="text-2xl leading-normal text-gray-800 ">Total:</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
                240
              </p>
            </div>
            <button className="text-base leading-none w-full py-5  border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
