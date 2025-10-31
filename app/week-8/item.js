export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li onClick={onSelect}
      className="shadow-lg text-left text-xl my-4 mx-auto max-w-2xl border border-blue-800 bg-blue-100 rounded-md p-4">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}