import roomImage from "../assets/images/room1.jpg";
import room2Image from "../assets/images/room2.jpg";
import room3Image from "../assets/images/room3.jpg";
import suitesImage from "../assets/images/suite1.jpg";
import villasImage from "../assets/images/villa1.jpg";
import bungalowsImage from "../assets/images/bungallow1.jpg";
import accessibleImage from "../assets/images/acessible1.jpg";

const accommodationTypes = [
  {
    id: "rooms",
    label: "ROOMS",
    image: roomImage,
  },
  {
    id: "suites",
    label: "SUITES",
    image: suitesImage,
  },
  {
    id: "villas",
    label: "VILLAS",
    image: villasImage,
  },
  {
    id: "bungalows",
    label: "BUNGALOWS",
    image: bungalowsImage,
  },
  {
    id: "accessible",
    label: "ACCESSIBLE",
    image: accessibleImage,
  },
];

const accommodationUnits = {
  rooms: [
    {
      id: "deluxe-queen",
      name: "Fairmont Deluxe with Queen Bed",
      bed: "Queen size bed x 1",
      size: "34 m2/365sqft",
      persons: "2 persons",
      extra: "",
      image: roomImage,
      description:
        "Elegantly designed for 2 adults, this spacious deluxe room features a fireplace, plush bedding, a private bathroom, and serene garden or Mount Kenya views. Enjoy signature Fairmont touches like a tea/coffee station, cozy seating, and ample wardrobe space.",
      chips: [
        "UP TO 2 GUESTS",
        "QUEEN BED",
        "IDYLLIC VIEWS",
        "SPACIOUS COMFORT",
      ],
    },
    {
      id: "deluxe-twin",
      name: "Fairmont Deluxe with Twin Bed",
      bed: "Single bed x 2",
      size: "34 m2/365sqft",
      persons: "2 persons",
      extra: "Mountain view",
      image: room2Image,
      description:
        "Designed for comfort and flexibility, this twin-bed deluxe room offers classic Safari Club charm with generous space, en-suite bathroom, and scenic mountain outlooks.",
      chips: ["UP TO 2 GUESTS", "TWIN BEDS", "MOUNTAIN VIEW", "FIREPLACE"],
    },
    {
      id: "riverside-queen",
      name: "Riverside Deluxe Room with Queen Bed",
      bed: "Queen size bed x 1",
      size: "43 m2/462sqft",
      persons: "3 persons",
      extra: "River side",
      image: room3Image,
      description:
        "Set near tranquil waters, the Riverside Deluxe room blends warm interiors with expanded living space and relaxing views. Perfect for couples or small families.",
      chips: ["UP TO 3 GUESTS", "QUEEN BED", "RIVERSIDE", "LARGE ROOM"],
    },
  ],
  suites: [
    {
      id: "junior-suite",
      name: "Junior Suite",
      bed: "King size bed x 1",
      size: "52 m2/560sqft",
      persons: "3 persons",
      extra: "Garden view",
      image:
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&q=80",
      description:
        "A spacious suite with separate sitting area, elegant decor and serene garden vistas. Ideal for longer stays and refined comfort.",
      chips: ["UP TO 3 GUESTS", "KING BED", "SUITE LOUNGE", "GARDEN VIEW"],
    },
  ],
  villas: [
    {
      id: "garden-villa",
      name: "Garden Villa",
      bed: "King size bed x 1",
      size: "70 m2/753sqft",
      persons: "4 persons",
      extra: "Private patio",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80",
      description:
        "A private villa retreat with expansive indoor-outdoor living, dedicated lounge space, and direct access to lush lawns.",
      chips: ["UP TO 4 GUESTS", "KING BED", "PRIVATE PATIO", "VILLA PRIVACY"],
    },
  ],
  bungalows: [
    {
      id: "heritage-bungalow",
      name: "Heritage Bungalow",
      bed: "Queen size bed x 1",
      size: "58 m2/624sqft",
      persons: "3 persons",
      extra: "Fireplace",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80",
      description:
        "Experience timeless charm in a standalone bungalow featuring warm wooden accents, a cozy fireplace, and generous living space.",
      chips: [
        "UP TO 3 GUESTS",
        "FIREPLACE",
        "STANDALONE UNIT",
        "CLASSIC STYLE",
      ],
    },
  ],
  accessible: [
    {
      id: "accessible-room",
      name: "Accessible Room",
      bed: "Queen size bed x 1",
      size: "36 m2/388sqft",
      persons: "2 persons",
      extra: "Accessible design",
      image:
        "https://images.unsplash.com/photo-1616594039964-3f7f5f2f9d7b?w=900&q=80",
      description:
        "Thoughtfully designed for ease and comfort with accessible pathways, adapted bathroom features, and seamless movement throughout the room.",
      chips: ["ACCESSIBLE", "QUEEN BED", "WIDE ACCESS", "COMFORT FIRST"],
    },
  ],
};

export { accommodationTypes, accommodationUnits };
