import faker from 'faker';
import { eTypeProduct } from "./type.js";

/**
 * Product list will be static or randomly generated (through faker)
 */
const eProductModeGeneration =
{
    "static": `static`,
    "dynamic": `dynamic`,
};

/**
 *
 */
const options = {
    nbFavorites: 3,
    nbTrending: 4,
    nbProducts: 24,
    nbItemsMaxByProduct: 7,
    productModeGeneration: eProductModeGeneration.static
}

const setOptions = (p_options) => {
    options = { ...options, ...p_options };
}


const productCategories = [
    {
        id: 'eTrending',
        label: 'Trending products',
        order: 1
    },
    {
        id: 'eOthers',
        label: 'Products',
        order: 2
    },
    {
        id: 'eFavorites',
        label: 'Our favorites',
        order: 3
    }
];



const trendingProducts = [
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
        imageAlt: ""
    },
    {
        id: 4,
        name: "Organizer Set",
        color: "Walnut",
        price: "$149",
        href: "#",
        imageSrc:
            "https://assets.twicpics.com/demo/fake-websites/products-listing/home-page-04-trending-product-01.jpeg",
        imageAlt: ""
    },
];

const otherProducts = [
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

const favoritesProducts = [
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


const getRandomString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Return product details object
 * @returns {[{name: string, items: *[]}]}
 */
const getProductDetails = () => {
    let productDetails = {
        name: "Features",
        items: []
    };

    for (let i = 0; i < options.nbItemsMaxByProduct; i++) {
        const newItem = faker.commerce.productAdjective();
        // Add if items does not already exists for this product
        if (!productDetails.items.includes(newItem)) {
            productDetails.items.push(newItem);
        }
    }
    return [productDetails];
}

const completeProduct = (products, typeProduct) => {
    return products.map(product => {
        return { ...product, productCategoriesId: typeProduct }
    })
}

const getType = (i) => {
    if (i <= options.nbFavorites) {
        return eTypeProduct.favorites; // favorites's id
    }
    if ((i - options.nbFavorites) <= options.nbTrending) {
        return eTypeProduct.trending; // trendings'id
    }

    return eTypeProduct.other; // others products's id
}

const getStaticProducList = () => {
    const products = [
        ...completeProduct(trendingProducts, eTypeProduct.trending),
        ...completeProduct(favoritesProducts, eTypeProduct.favorites),
        ...completeProduct(otherProducts, eTypeProduct.other)
    ];
    return products;
}

const getDynamicProductList = () => {
    faker.setLocale('en_US');

    let products = [];

    for (let i = 1; i < options.nbProducts; i++) {
        products.push(
            {
                id: i,
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                color: faker.commerce.color(),
                price: faker.commerce.price(),
                imageSrc: `https://picsum.photos/seed/${getRandomString()}/1280/720`,
                imageAlt: faker.commerce.productName(),
                quantity: faker.datatype.number({ min: 0, max: 20 }),
                href: `${i}`,
                rating: faker.datatype.number({ min: 0, max: 4 }),
                productCategoriesId: getType(i),
                images: [],
                colors: [],
                details: getProductDetails()
            }
        );
    }

    return products;
}


/**
 * Return product categories
 */
const getProductCategories = () => {
    return productCategories;
}

/**
 * Return a product list
 */
const getProductList = () => {
    if (options.productModeGeneration == eProductModeGeneration.dynamic) {
        return getDynamicProductList();
    }
    else {
        return getStaticProducList();
    }
}

export { getProductList, getProductCategories, setOptions };
