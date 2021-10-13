import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <section className="p-10">
      <Head>
        <title>TwicPics x Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-2 text-lg font-bold">Pages demos</h1>
      <ul className="list-disc ml-5">
        <li>
          <Link href="/storefront">
            <a className="text-blue-500 hover:underline">Storefront</a>
          </Link>
        </li>
        <li>
          <Link href="/products-listing">
            <a className="text-blue-500 hover:underline">Products listing</a>
          </Link>
        </li>
        <li>
          <Link href="/product-overview">
            <a className="text-blue-500 hover:underline">Product overview</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default HomePage;
