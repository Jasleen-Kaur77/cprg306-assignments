"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  const handleItemSelect = (item) => {
    let cleanName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .toLowerCase();
    setSelectedItemName(cleanName);
  };

  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  return (
    <main>
      <header className="m-4 p-5 mx-auto max-w-2xl rounded-xl">
        <h1 className="text-4xl font-bold text-center text-blue-950" >Shopping List + Meal Ideas</h1>
      </header>
      <section className="flex flex-col md:flex-row gap-6 p-6">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="md:w-1/2 mr-15">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </section>
    </main>
  );
}