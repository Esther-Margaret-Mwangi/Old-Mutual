import tusksImage from "../assets/images/tusks.jpg";
import colobusImage from "../assets/images/colobus.jpg";
import wildDiningImage from "../assets/images/wild dining.jpg";
import zebarImage from "../assets/images/Zebar.jpg";
import poolBarImage from "../assets/images/pool bar.jpg";

const dineData = {
  restaurants: [
    {
      id: "tusks",
      name: "Tusks Restaurant & Terrace",
      subtitle: "All Day Dining Restaurant & Live Stations.",
      description:
        "The signature restaurant, nestled against the mountain with stunning views, offers all-day dining using locally sourced organic ingredients, including fresh herbs and vegetables from our own garden and farm. Open for breakfast, lunch, and dinner, it boasts an elegant ambiance with a terrace and an indoor dining area centered around the original grand fireplace.",
      tags: ["INTERNATIONAL", "SMART CASUAL", "ALL DAY"],
      image: tusksImage,
    },
    {
      id: "colobus",
      name: "Colobus Restaurant",
      subtitle: "Exclusive Dining with Open Live Kitchen",
      description:
        "Experience our talented chefs in action at Colobus Fine Dining Resturant as they prepare your signature gourmet dinners. Enjoy the enticing aromas and flavors of dishes freshly made with locally sourced ingredients. Every plate is crafted to perfection, offering a unique dining experience that combines culinary artistry with the finest local produce.",
      tags: ["BRASSERIE", "UPSCALE", "DINNER"],
      image: colobusImage,
    },
    {
      id: "wild-dining",
      name: "Wild Dining",
      subtitle: "Open Fire dinning",
      description:
        "Indulge yourself to traditional siganture Choma style dishes prepared by our culinary team in a unique open fire dining experience, sets by the River Likii bordering the Mount Kenya forest.",
      tags: ["INTERNATIONAL", "CASUAL", "RESERVATIONS REQUIRED"],
      image: wildDiningImage,
    },
  ],
  bars: [
    {
      id: "zebar",
      name: "Zebar",
      subtitle: "ZEBAR 'the view'",
      description:
        "ZeBar is the ideal spot to unwind from late morning onwards, whether indoors or on the terrace. Enjoy stunning views of Mount Kenya and the scenic lawns of the property. ZeBar offers a delightful snack menu, complemented by a wide selection of liqueurs, beers, soft drinks, cocktails, wines, spirits, tea, coffee, and bar snacks, making it a perfect place to relax and refresh.",
      tags: ["INTERNATIONAL", "UPSCALE", "ALL DAY"],
      image: zebarImage,
    },
    {
      id: "swimming-pool-bar",
      name: "Swimming Pool Bar",
      subtitle: "POOL BAR Refreshments & Cocktails.",
      description:
        "Relax by the pool, while your waiter serves you a refreshing cocktail crafted by the Zebar. Liqueurs, soft drinks, cocktails, tea and coffee.",
      tags: ["COCKTAILS", "CASUAL", "ALL DAY"],
      image: poolBarImage,
    },
  ],
};

export default dineData;
