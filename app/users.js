async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Users() {
  let products = await getProducts();
  return (
    <div className="">
      <h2 className="text-white font-semibold text-2xl">products</h2>
      <ul>
        {products.map((product, id) => {
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p className="text-white">{price}</p>
          </li>;
        })}
      </ul>
    </div>
  );
}
