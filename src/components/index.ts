export interface Item {
  title?: string;
  img?: string;
  route?: string;
}

export const trending_data: Item[] = [
  {
    title: "Crop PDF",
    img: "./icons/trending-1.svg",
    route: "/screen5",
  },
  {
    title: "Convert File Into PDF",
    img: "./icons/trending-2.svg",
    route: "/screen9",
  },
];

export const categories_data: Item[] = [
  {
    title: "PDF Multi Tool",
    img: "./icons/c-1.svg",
    route: "/screen7",
  },
  {
    title: "Page Operations",
    img: "./icons/c-2.svg",
    route: "/screen7",
  },
  {
    title: "Convert",
    img: "./icons/c-3.svg",
    route: "/screen7",
  },
  {
    title: "PDF Protection",
    img: "./icons/c-4.svg",
    route: "/screen7",
  },
  {
    title: "Miscellaneous",
    img: "./icons/c-5.svg",
    route: "/screen7",
  },
];

export const boxOption: Item[] = [
  {
    title: "Crop PDF",
    img: "./icons/oi-1.svg",
  },
  {
    title: "Rotate Page",
    img: "./icons/oi-2.svg",
  },
  {
    title: "Overlays PDFs",
    img: "./icons/oi-3.svg",
  },
  {
    title: "Split",
    img: "./icons/oi-4.svg",
  },
];

//data
export const language: Array<string> = [
  "English",
  "Arabic",
  " Russian",
  "Japanese",
  "Gujarati",
  "Italian",
  "Hindi",
  "Chinese",
  "French",
  "Urdu",
  "Spanish",
];

interface PriceItem {
  duration: number;
  prevPrice: number;
  currPrice: number;
}

export const pricing: PriceItem[] = [
  {
    duration: 6,
    prevPrice: 5000,
    currPrice: 3500,
  },
  {
    duration: 1,
    prevPrice: 400,
    currPrice: 500,
  },
];

export const setting: Item[] = [
  { title: "All files", img: "./icons/ai-1.svg", route: "/screen9" },
  { title: "Bookmarks", img: "./icons/ai-2.svg" },
  { title: "App Language", img: "./icons/ai-3.svg", route: "/screen6" },
  { title: "Share", img: "./icons/ai-4.svg" },
  { title: "Rate Us", img: "./icons/ai-5.svg" },
  { title: "Privacy Policy", img: "./icons/ai-6.svg" },
];

export const pdf: Item[] = [
  { title: "All files On Your Devise", img: "./icons/ai-1.svg" },
  { title: "Recently Edited Files", img: "./icons/ai-1.svg" },
];
