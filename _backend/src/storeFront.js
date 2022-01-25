import { eTypeItems, eItemsDisplayMode } from "./type.js";
/**
 * Return currencies list
 */
const getCurrencies = () => {
    return ["CAD", "USD", "AUD", "EUR", "GBP"];
}

/**
 * Return data used for navigation bar generation
 */
const getNavigation = () => {
    return {
        categories: [
            {
                name: "Women",
                featured: [
                    {
                        name: "New Arrivals",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-category-01.jpeg",
                        imageAlt:
                            "Models sitting back to back, wearing Basic Tee in black and bone.",
                    },
                    {
                        name: "Basic Tees",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-category-02.jpeg",
                        imageAlt:
                            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                    },
                    {
                        name: "Accessories",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-category-03.jpeg",
                        imageAlt:
                            "Model wearing minimalist watch with black wristband and white watch face.",
                    },
                    {
                        name: "Carry",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-category-04.jpeg",
                        imageAlt:
                            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
                    },
                ],
            },
            {
                name: "Men",
                featured: [
                    {
                        name: "New Arrivals",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-01-men-category-01.jpeg",
                        imageAlt:
                            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
                    },
                    {
                        name: "Basic Tees",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-01-men-category-02.jpeg",
                        imageAlt: "Model wearing light heather gray t-shirt.",
                    },
                    {
                        name: "Accessories",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-01-men-category-03.jpeg",
                        imageAlt:
                            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
                    },
                    {
                        name: "Carry",
                        href: "#",
                        imageSrc:
                            "https://assets.twicpics.com/demo/fake-websites/homepage/mega-menu-01-men-category-04.jpeg",
                        imageAlt:
                            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
                    },
                ],
            },
        ],
        pages: [
            { name: "Company", href: "#" },
            { name: "Stores", href: "#" },
        ],
    }
}

/**
 * Get data used for sections generation
 */
const getSections = () => {
    return [
        {
            type: eTypeItems.category,
            title: 'Shop by Category',
            headerLink: 'Browse all categories',
            itemsDisplayMode: eItemsDisplayMode.compact,
            items: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-category-01.jpeg",
                },
                {
                    name: "Productivity",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-category-02.jpeg",
                },
                {
                    name: "Workspace",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-category-04.jpeg",
                },
                {
                    name: "Accessories",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-category-05.jpeg",
                },
                {
                    name: "Sale",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-category-03.jpeg",
                },
            ]
        },
        {
            type: eTypeItems.feature,
            background: {
                imageSrc: 'https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-feature-section-01.jpeg',
                title: 'Level up your desk',
                txt: 'Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.',
                buttonTxt: 'Shop Workspace'
            }
        },
        {
            type: eTypeItems.collection,
            title: 'Shop by Collection',
            subTitle: 'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.',
            itemsDisplayMode: eItemsDisplayMode.extended,
            items: [
                {
                    name: "Handcrafted Collection",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-collection-01.jpeg",
                    imageAlt:
                        "Brown leather key ring with brass metal loops and rivets on wood table.",
                    description:
                        "Keep your phone, keys, and wallet together, so you can lose everything at once.",
                },
                {
                    name: "Organized Desk Collection",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-collection-02.jpeg",
                    imageAlt:
                        "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
                    description:
                        "The rest of the house will still be a mess, but your desk will look great.",
                },
                {
                    name: "Focus Collection",
                    href: "#",
                    imageSrc:
                        "https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-collection-03.jpeg",
                    imageAlt:
                        "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
                    description:
                        "Be more productive than enterprise project managers with a single piece of paper.",
                },
            ]
        },
        {
            type: eTypeItems.comfort,
            background: {
                imageSrc: 'https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-feature-section-02.jpeg',
                title: 'Simple productivity',
                txt: `Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.`,
                buttonTxt: 'Shop Focus'
            },
        }
    ];
}

/**
 * Get data used for fotter navigation bar generation
 */
const getFooterNavigation = () => {
    return {
        shop: [
            { name: "Bags", href: "#" },
            { name: "Tees", href: "#" },
            { name: "Objects", href: "#" },
            { name: "Home Goods", href: "#" },
            { name: "Accessories", href: "#" },
        ],
        company: [
            { name: "Who we are", href: "#" },
            { name: "Sustainability", href: "#" },
            { name: "Press", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Terms & Conditions", href: "#" },
            { name: "Privacy", href: "#" },
        ],
        account: [
            { name: "Manage Account", href: "#" },
            { name: "Returns & Exchanges", href: "#" },
            { name: "Redeem a Gift Card", href: "#" },
        ],
        connect: [
            { name: "Contact Us", href: "#" },
            { name: "Twitter", href: "#" },
            { name: "Instagram", href: "#" },
            { name: "Pinterest", href: "#" },
        ],
    };
}

export { getCurrencies, getNavigation, getSections, getFooterNavigation };
