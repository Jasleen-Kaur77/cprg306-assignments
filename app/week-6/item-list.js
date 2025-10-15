"use client"

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const sortedArray = [...items].sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return 1;
    if (a[sortBy] < b[sortBy]) return -1;
    return 0;
  }
  );



  return (
    <div>
      <p>Sort by:</p>
      <button onClick={() => setSortBy("name")}>Name</button>
      <button onClick={() => setSortBy("category")}>Category</button>
    </div>
  );

}