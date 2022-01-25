
const getProductForOverview = () => {
    return {
        name: "Zip Tote Basket",
        price: "$140",
        rating: 4,
        images: [
            {
                id: 1,
                name: "Angled view",
                src: "https://assets.twicpics.com/demo/fake-websites/product-overview/product-page-03-product-01.jpeg",
                alt: "Angled front view with bag zipped and handles upright.",
            },
            {
                id: 2,
                name: "Angled view",
                src: "https://assets.twicpics.com/demo/fake-websites/product-overview/product-page-03-product-02.jpeg",
                alt: "Angled front view with bag zipped and handles upright.",
            },
            {
                id: 3,
                name: "Angled view",
                src: "https://assets.twicpics.com/demo/fake-websites/product-overview/product-page-03-product-03.jpeg",
                alt: "Angled front view with bag zipped and handles upright.",
            },
            {
                id: 4,
                name: "Angled view",
                src: "https://assets.twicpics.com/demo/fake-websites/product-overview/product-page-03-product-04.jpeg",
                alt: "Angled front view with bag zipped and handles upright.",
            },
        ],
        colors: [
            {
                name: "Washed Black",
                bgColor: "bg-gray-700",
                selectedColor: "ring-gray-700",
            },
            { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
            {
                name: "Washed Gray",
                bgColor: "bg-gray-500",
                selectedColor: "ring-gray-500",
            },
        ],
        description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
        details: [
            {
                name: "Features",
                items: [
                    "Multiple strap configurations",
                    "Spacious interior with top zip",
                    "Leather handle and tabs",
                    "Interior dividers",
                    "Stainless strap loops",
                    "Double stitched construction",
                    "Water-resistant",
                ],
            },
            // More sections...
        ],
    };

}

export { getProductForOverview };
