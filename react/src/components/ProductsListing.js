/* eslint-disable jsx-a11y/anchor-is-valid */
import { TwicImg } from "@twicpics/components/react";
import twicpicsLogo from "../images/twicpics-logo.svg";
import reactLogo from "../images/react-logo.png";

const products1 = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-04-trending-product-02.jpeg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Machined Pencil & Pen Set",
    color: "Black",
    price: "$70",
    href: "#",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-04-trending-product-03.jpeg",
    imageAlt: "",
  },
  {
    id: 3,
    name: "Mini-Sketchbooks",
    color: "Light Brown",
    price: "$27",
    href: "#",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-04-trending-product-04.jpeg",
    imageAlt: "",
  },
  {
    id: 4,
    name: "Organizer Set",
    color: "Walnut",
    price: "$149",
    href: "#",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-04-trending-product-01.jpeg",
    imageAlt: "",
  },
];

const products2 = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-01.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-02.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-03.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-04.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Focus Card Tray",
    href: "#",
    price: "$64",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-05.jpeg",
    imageAlt: "",
  },
  {
    id: 6,
    name: "Focus Multi-Pack",
    href: "#",
    price: "$39",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-06.jpeg",
    imageAlt: "",
  },
  {
    id: 7,
    name: "Brass Scissors",
    href: "#",
    price: "$50",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-07.jpeg",
    imageAlt: "",
  },
  {
    id: 8,
    name: "Focus Carry Pouch",
    href: "#",
    price: "$32",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-04-image-card-08.jpeg",
    imageAlt: "",
  },
  {
    id: 9,
    name: "Machined Pen",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-02-product-01.jpeg",
    imageAlt: "",
  },
  {
    id: 10,
    name: "Earthen Mug",
    href: "#",
    price: "$28",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-02-product-02.jpeg",
    imageAlt: "",
  },
  {
    id: 11,
    name: "Leatherbound Daily Journal Set",
    href: "#",
    price: "$50",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-02-product-03.jpeg",
    imageAlt: "",
  },
  {
    id: 12,
    name: "Leatherbound Daily Journal",
    href: "#",
    price: "$40",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-02-product-04.jpeg",
    imageAlt: "",
  },
  {
    id: 13,
    name: "Organic Basic Set",
    href: "#",
    price: "$149",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-05-image-card-01.jpeg",
    imageAlt: "",
  },
  {
    id: 14,
    name: "Out and About Bottle",
    href: "#",
    price: "$25",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-05-image-card-07.jpeg",
    imageAlt: "",
  },
  {
    id: 15,
    name: "Daily Notebook Refill Pack",
    href: "#",
    price: "$14",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-05-image-card-08.jpeg",
    imageAlt: "",
  },
  {
    id: 16,
    name: "Organize Basic Set",
    href: "#",
    price: "$149",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-05-image-card-06.jpeg",
    imageAlt: "",
  },
];

const products3 = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-01-image-card-01.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-01-image-card-02.jpeg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://assets.twicpics.com/demo/fake-websites/products-listing/category-page-01-image-card-03.jpeg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="flex justify-center p-2 text-white bg-twicpics">
        <h1 className="flex items-center space-x-3">
          <img className="h-8 object-contain" src={twicpicsLogo} alt="" />
          <span className="font-semibold">x</span>
          <img className="h-7 object-contain" src={reactLogo} alt="" />
        </h1>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products1.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                <TwicImg
                  src={product.imageSrc}
                  ratio="4/5"
                  alt={product.imageAlt}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-16 px-4 sm:pt-6 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products2.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                <TwicImg src={product.imageSrc} alt={product.imageAlt} />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-16 px-4 sm:pt-6 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Our favorites
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products3.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full rounded-lg overflow-hidden">
                <TwicImg
                  src={product.imageSrc}
                  ratio="2/3"
                  alt={product.imageAlt}
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
