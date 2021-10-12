import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="p-10">
      <h1 className="mb-2 text-lg font-bold">Pages demos</h1>
      <ul className="list-disc ml-5">
        <li>
          <NavLink className="text-blue-500 hover:underline" to="/storefront">
            Storefront
          </NavLink>
        </li>
        <li>
          <NavLink className="text-blue-500 hover:underline" to="/product-overview">
            Product overview
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Home;
