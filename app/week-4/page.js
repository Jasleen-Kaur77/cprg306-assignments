import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-pink-900 m-6" > Add New Item</h1>
      <section>
        <NewItem />
      </section>
    </main>
  );
}