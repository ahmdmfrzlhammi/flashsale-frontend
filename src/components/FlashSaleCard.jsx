import React from "react";

const FlashSaleCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-500 font-semibold text-lg mt-1">Rp {product.price}</p>
      <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default FlashSaleCard;
