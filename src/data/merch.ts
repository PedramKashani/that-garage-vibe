export type MerchItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
};

export const merchItems: MerchItem[] = [
  {
    id: "dad-hat",
    name: "TGV Dad Hat",
    price: "$35",
    image: "/assets/images/merch/dad-hat-black.webp",
    href: "https://thatgaragevibe.printful.me/product/dad-hat",
  },
  {
    id: "sweatshirt",
    name: "Champion Sweatshirt",
    price: "$65",
    image: "assets/images/merch/crewneck-black.webp",
    href: "https://thatgaragevibe.printful.me/product/mens-champion-sweatshirt",
  },
  {
    id: "long-sleeve",
    name: "Champion Long Sleeve",
    price: "$45",
    image: "assets/images/merch/long-sleeve-black.webp",
    href: "https://thatgaragevibe.printful.me/product/mens-champion-long-sleeve-shirt",
  },
  {
    id: "beanie",
    name: "Cuffed Beanie",
    price: "$30",
    image: "assets/images/merch/cuffed-beanie-black.webp",
    href: "https://thatgaragevibe.printful.me/product/cuffed-beanie-yupoong-1501kc",
  },
  {
    id: "crop-top",
    name: "Women’s Crop Top",
    price: "$40",
    image: "assets/images/merch/womens-crop-top-black.webp",
    href: "https://thatgaragevibe.printful.me/product/womens-crop-top-as-colour-4062",
  },
];
