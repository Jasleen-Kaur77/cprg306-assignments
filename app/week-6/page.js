import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <header className="m-4 p-5 bg-blue-200 mx-auto max-w-2xl rounded-xl">
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-blue-950" >Shopping List</h1>
      </header>
      <section>
        <ItemList />
      </section>
    </main>
  );
}