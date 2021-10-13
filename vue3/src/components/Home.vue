<template>
  <section className="p-10">
    <h1 className="mb-2 text-lg font-bold">Pages demos</h1>
    <ul className="list-disc ml-5">
      <li>
        <router-link className="text-blue-500 hover:underline" to="/storefront"
          >Storefront</router-link
        >
      </li>
      <li>
        <router-link
          className="text-blue-500 hover:underline"
          to="/products-listing"
          >Products listing</router-link
        >
      </li>
      <li>
        <router-link
          className="text-blue-500 hover:underline"
          to="/product-overview"
          >Product overview</router-link
        >
      </li>
    </ul>

    <router-view />
  </section>
</template>
