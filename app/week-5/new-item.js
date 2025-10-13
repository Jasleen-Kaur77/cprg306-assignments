"use client"

import { useState } from "react";

export default function NewItem() {
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
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);
    alert("Item: " + name + "Quantity: " + quantity + "Category: " + category);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        className="outline mx-4"
        name="name"
        placeholder="e.g., milk, 4 L 🥛"
        required
      ></input>

      <div className="shadow-2xl border border-pink-800 bg-pink-100 rounded-md p-4 my-4 mx-auto max-w-xl">
        <p className="text-xl font-semibold text-pink-600">Quantity: {quantity}</p>
        <div className="flex justify-items-start gap-4 mb-4">
          <button type="button" onClick={decrement} disabled={quantity === 1} className="bg-pink-500 hover:bg-pink-700 disabled:bg-pink-300 rounded m-3 p-3 text-white w-12 font-bold text-2xl"> - </button>
          <button type="button" onClick={increment} disabled={quantity === 20} className="bg-pink-500 hover:bg-pink-700 disabled:bg-pink-300 rounded m-3 p-3 text-white w-12 font-bold text-2xl"> + </button>
        </div>
        <p className="text-pink-400">Allowed range 1-20</p>
      </div>

      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozenFoods">Frozen Foods</option>
        <option value="cannedGoods">Canned Goods</option>
        <option value="dryGoods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="otherOptions">Other</option>
      </select>

      <button
        type="submit"
      >
        Add item
      </button>

    </form>
  );
}