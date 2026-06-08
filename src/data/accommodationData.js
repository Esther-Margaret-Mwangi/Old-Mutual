import roomImage from "../assets/images/room1.jpg";
import room2Image from "../assets/images/room2.jpg";
import room3Image from "../assets/images/room3.jpg";
import suitesImage from "../assets/images/suite1.jpg";
import villasImage from "../assets/images/villa1.jpg";
import villas2Image from "../assets/images/villa2.jpg";
import bungalowsImage from "../assets/images/bungallow1.jpg";
import bungalow2Image from "../assets/images/bungallow2.jpg";
import accessibleImage from "../assets/images/acessible1.jpg";
import suite2Image from "../assets/images/suite2.jpg";
import suite3Image from "../assets/images/suite3.jpg";
import suite4Image from "../assets/images/suite4.jpg";
import suite5Image from "../assets/images/suite5.jpg";
import suite6Image from "../assets/images/suite6.jpg";


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
        "Perfect for traveling friends or colleagues, this room accommodates 2 adults and features two twin beds, a fireplace, garden views, and a warm, classic ambiance located within the main building. Includes a tea/coffee maker, wardrobe, and spacious bathroom.",
      chips: ["UP TO 2 GUESTS", "IDYLLIC VIEWS", "DOUBLE BEDS", "SPACIOUS COMFORT"],
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
      "Tucked along the peaceful forest line and sounds of the river, the Riverside Deluxe Room with Queen Bed is a haven of comfort and nature. Thoughtfully appointed with a plush queen bed, a warm stone fireplace, and a private terrace with sweeping forest views, this room invites guests to fully unwind in a serene and scenic setting.",
      chips: ["UP TO 3 GUESTS", "IDYLLIC VIEWS", "QUEEN BED", "IMMERSED IN NATURE", "SPACIOUS COMFORT"],
    },
  ],
  suites: [
    {
      id: "fairmont-suite",
      name: "Fairmont Suite with King Bed",
      bed: "King size bed x 1",
      size: "52 m2/559sqft",
      persons: "3 persons",
      extra: "Mountain view",
      image: suitesImage,
      description:
      "These refined suites sleep 3 adults or 2 adults and 1 child (with extra bed). Enjoy a fireplace, separate lounge, garden views, and elegant decor. Includes en-suite bathroom, sofa, tea/coffee facilities, and wardrobe—ideal for longer stays.",
      chips: ["UP TO 3 PERSONS", "KING BED", "GARDEN VIEW", "SMART TV", "HIGH FLOOR"],
    },
    {
      id: "riverside-suite",
      name: "Riverside Suite with King Bed",
      bed: "King size bed x 1",
      size: "41 m2/441sqft",
      persons: "3 persons",
      extra: "Forest view",
      image: suite2Image,
      description:
      "These suites welcome 3 adults or 2 adults and 1 child, with a convertible sofa bed. Enjoy a fireplace, hot tub, terrace dining space, and forest views. Includes a lounge area, sofa, tea/coffee maker, and luxurious bath. Perfect for nature lovers.",
      chips: ["UP TO 3 GUESTS", "KING BED", "IDYLLIC VIEWS", "IMMERSED IN NATURE", "SPACIOUS COMFORT"],
    },
    {
      id: "riverside-twin-suite",
      name: "Riverside Suite with Twin Bed",
      bed: "Single bed x 2",
      size: "41 m2/441sqft",
      persons: "3 persons",
      extra: "Forest view",
      image: suite3Image,
      description:
      "A one Bedroom spacious Suite which features a traditional decor designed with elegance and comfort. Comfortable living area with sofa bed, a beautiful stone fire place and a private balcony with forest views.",
      chips: ["UP TO 3 GUESTS", "DOUBLE BEDS", "IDYLLIC VIEWS", "IMMERSED IN NATURE", "SPACIOUS COMFORT"],
    },
    {
      id: "garden-suite",
      name: "Garden Suite with King Bed",
      bed: "King size bed x 1",
      size: "43 m2/462sqft",
      persons: "3 persons",
      extra: "Mountain view",
      image: suite4Image,
      description:
      "Immerse yourself in lush tranquility with these suites designed for 3 adults or 2 adults and 1 child. With a fireplace, elegant bath, seating area, and extra bed options, it's perfect for couples or small families.",
      chips: ["UP TO 3 GUESTS", "KING BED", "IDYLLIC VIEWS", "IMMERSED IN NATURE", "SPACIOUS COMFORT"],
    },
    {
      id: "manor-junior-suite",
      name: "Manor Junior Suite with King Bed",
      bed: "Single bed x 2 & King size bed x 1",
      size: "63 m2/677sqft",
      persons: "2 persons",
      extra: "Mountain view",
      image: suite5Image,
      description:
      "Situated in the original historical block of the resort, the suite features an open concept design including a spacious lounge area flaunting luxurious furnishings, a wooden lit fire place, a plush bed and a private balcony overlooking the swimming pool, picturesque gardens and unrivalled view of the mountain. Its luxurious 5 piece en suite bathroom will leave you feeling pampered.",
      chips: ["UP TO 2 GUESTS", "KING BED", "MOUNTAIN VIEW", "FIREPLACE", "HIGH FLOOR"],
    },
    {
      id: "manor-equatorial-suite",
      name: "Manor Equatorial Suite with King Bed",
      bed: "King size bed x 1",
      size: "60 m2/645sqft",
      persons: "2 persons",
      extra: "Mountain view",
      image: suite6Image,
      description:
      "Located along the Equator, this spacious and contemporary suite features an elegant bedroom, a large living area, rich fabrics, individually styled furniture, fire place and a private balcony with mountain views.",
      chips: ["UP TO 2 GUESTS", "KING BED", "IDYLLIC VIEWS", "IMMERSED IN NATURE", "SPACIOUS COMFORT"],
    },
    
  ],
  villas: [
    {
      id: "batian-villa",
      name: "Batian Villa",
      bed: "Single bed x 2 & King size bed x 1",
      size: "138 m2/1485sqft",
      persons: "5 persons",
      extra: "Mountain view",
      image:
        villasImage,
      description:
       "Discover the perfect blend of warmth and comfort in the exquisite Batian Villa. The expansive living room, graced with a charming fireplace, offers a serene retreat for relaxation and conversation. An elegant dining room seamlessly integrates with a modern open kitchen, creating an inviting space for culinary delights and memorable gatherings. Ideal for families and friends, this villa promises a harmonious living experience",
      chips: ["UP TO 4 GUESTS", "IDYLLIC VIEWS", "SPACIOUS COMFORT", "SMART TV", "IMMERSED IN NATURE"],
    },
    {
      id: "sendeo-villa",
      name: "Sendeo Villa",
      bed: "Twin bed x 2 & King size bed x 1",
      size: "148 m2/1593sqft",
      persons: "6 persons",
      extra: "Forest view",
      image:
        villas2Image,
      description:
       "Discover the perfect blend of warmth and comfort in the exquisite Sendeo Villa. The expansive living room, graced with a charming fireplace, offers a serene retreat for relaxation and conversation. An elegant dining room seamlessly integrates with a modern open kitchen, creating an inviting space for culinary delights and memorable gatherings. Ideal for families and friends, this villa promises a harmonious living experience.",
      chips: ["UP TO 6 GUESTS", "IDYLLIC VIEWS", "SPACIOUS COMFORT", "SMART TV", "IMMERSED IN NATURE"],
    },
  ],
  bungalows: [
    {
      id: "william-holden-two-bedroom-suite",
      name: "William Holden Two-Bedroom Suites- 2 king beds",
      bed: "King size bed x 2",
      size: "96 m2/1033sqft",
      persons: "5 persons",
      extra: "Mountain view",
      image: bungalowsImage,
      description:
      "Elegant and classic two bedrooms cottage featuring a spacious lounge with sofas and a beautiful stone fire place.",
      chips: [
        "UP TO 3 GUESTS",
        "FIREPLACE",
        "STANDALONE UNIT",
        "CLASSIC STYLE",
      ],
    },
    {
      id: "william-holden-one-bedroom-suite",
      name: "William Holden Two-Bedroom Suites- 1 king bed",
      bed: "Twin bed x 1 & King size bed x 1",
      size: "96 m2/1033sqft",
      persons: "5 persons",
      extra: "Mountain view",
      image: bungalow2Image,
      description:
      "An elegant and classic two bedrooms cottage featuring a spacious lounge with sofas and a beautiful stone fire place.",
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
      name: "Garden Suite with King Bed",
      bed: "King size bed x 1",
      size: "73 m2/785sqft",
      persons: "3 persons",
      extra: "Mountain View",
      image:
        "https://images.unsplash.com/photo-1616594039964-3f7f5f2f9d7b?w=900&q=80",
      description:
      "Located walking distance from the main building, the suite provides a living room area with sofa bed and a stone fire.",
      chips: ["ACCESSIBLE", "KING BED", "MOUNTAIN VIEW"],
    },
  ],
};

export { accommodationTypes, accommodationUnits };
