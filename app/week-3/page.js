import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <header>
        <h1>Shopping List</h1>
      </header>
      <section>
        <ItemList />
      </section>
    </main>
  );
}