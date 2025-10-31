"use client";

import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const sortedArray = [...items].sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return 1;
    if (a[sortBy] < b[sortBy]) return -1;
    return 0;
  }
  );



  return (
    <div>
      <p className="text-center font-bold text-xl m-4">Sort by:</p>
      <div className="flex gap-4 justify-center">
        <button className="bg-blue-600 p-3 text-white hover:bg-blue-400 rounded-md font-bold text-lg w-25" onClick={() => setSortBy("name")}>Name</button>
        <button className="bg-gray-300 p-3 text-gray-700 hover:bg-blue-400 rounded-md font-bold text-lg w-25" onClick={() => setSortBy("category")}>Category</button>
      </div>
      <ul>
        {sortedArray.map((item) => (
          <li key={item.id} className="shadow-lg text-left text-xl my-4 mx-auto max-w-2xl border border-blue-800 bg-blue-100 rounded-md p-4">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}