"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <header className="m-4 p-5 bg-blue-200 mx-auto max-w-2xl rounded-xl">
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-blue-950" >Shopping List</h1>
      </header>
      <section>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </section>
    </main>
  );
}