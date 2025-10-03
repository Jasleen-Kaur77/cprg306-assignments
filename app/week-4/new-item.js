"use client"

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="shadow-2xl border border-pink-800 bg-pink-100 rounded-md p-4 my-4 mx-auto max-w-xl">
      <p className="text-xl font-semibold text-pink-600">Quantity: {quantity}</p>
      <div className="flex justify-items-start gap-4 mb-4">
        <button onClick={decrement} disabled={quantity === 1} className="bg-pink-500 hover:bg-pink-700 disabled:bg-pink-300 rounded m-3 p-3 text-white w-12 font-bold text-2xl"> - </button>
        <button onClick={increment} disabled={quantity === 20} className="bg-pink-500 hover:bg-pink-700 disabled:bg-pink-300 rounded m-3 p-3 text-white w-12 font-bold text-2xl"> + </button>
      </div>
      <p className="text-pink-400">Allowed range 1-20</p>
    </div>
  );
}