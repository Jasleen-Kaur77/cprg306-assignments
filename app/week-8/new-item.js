"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (

    <form onSubmit={handleSubmit} className="max-w-xl mx-auto outline-indigo-100 outline-4 p-8">
      <label htmlFor="name" className="text-xl">Item Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        className="block outline w-full text-xl h-11 my-2 rounded-lg"
        name="name"
        placeholder="e.g., milk, 4 L 🥛"
        required
      ></input>

      <div className="my-4">
        <p className="text-xl my-2">Quantity (1-20)</p>
        <p className="text-xl text-gray-500 font-extralight my-2">Current: {quantity}</p>
        <div className="gap-4">
          <button type="button" onClick={decrement} disabled={quantity === 1} className="bg-gray-300 hover:bg-blue-300 disabled:bg-gray-200 rounded m-3 p-3 w-14 font-bold text-2xl"> - </button>
          <button type="button" onClick={increment} disabled={quantity === 20} className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-200 rounded m-3 p-3 w-14 font-bold text-2xl text-white"> + </button>
        </div>
        <p className="text-gray-500 my-2">Allowed range 1-20</p>
      </div>

      <p className="text-xl my-2">Category</p>

      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
        className="outline w-full text-xl h-11 my-2 rounded-lg"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen-foods">Frozen Foods</option>
        <option value="canned-goods">Canned Goods</option>
        <option value="dry-Goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="block outline h-11 my-4 w-32 text-xl rounded-xl bg-violet-700 text-white"
      >
        Add item
      </button>

    </form>
  );
}