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
    <ul>
      <Item {...items[0]} />
      <Item {...items[1]} />
      <Item {...items[2]} />
      <Item {...items[3]} />
      <Item {...items[4]} />
      <Item {...items[5]} />
      <Item {...items[6]} />
      <Item {...items[7]} />
      <Item {...items[8]} />
      <Item {...items[9]} />
      <Item {...items[10]} />
      <Item {...items[11]} />
    </ul>
  );

}