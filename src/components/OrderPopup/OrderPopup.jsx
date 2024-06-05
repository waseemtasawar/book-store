import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setOrderPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden w-[90%] max-w-lg transform transition-transform duration-300 scale-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Order Your Book
              </h1>
              <IoCloseOutline
                className="text-3xl text-gray-800 dark:text-white cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <div className="p-6">
              {orderPlaced ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Order Placed!
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Thank you for your order. Your book will be delivered soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleOrder}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform duration-300 text-white py-2 px-6 rounded-full font-semibold shadow-md"
                    >
                      Order Now
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
