import horseImage from "../assets/images/horse.jpg";
import bikingImage from "../assets/images/biking.jpg";
import walkingImage from "../assets/images/walking.jpg";
import naturewalkImage from "../assets/images/ecosafari.jpg";
import bongoImage from "../assets/images/bongo.jpg";
import breakfastImage from "../assets/images/breakfast.jpg";
import poolImage from "../assets/images/pool bar.jpg";
import roomImage from "../assets/images/room1.jpg";
import outdoorImage from "../assets/images/outdoor venue.jpg";
import bungalowsImage from "../assets/images/bungallow1.jpg";
import golfImage from "../assets/images/golf1.jpg";
import culinaryImage from "../assets/images/tusks.jpg";
import ecoSafariImage from "../assets/images/biking.jpg";
import kidsImage from "../assets/images/kidsexp.jpg";
import wellnessImage from "../assets/images/wellnessexp.jpg";

export const activityCategories = [
  { id: "hotel-activities", label: "Hotel Activities" },
  { id: "golf", label: "Golf" },
  { id: "experiences", label: "Experiences" },
];

const activities = [
  {
    id: "horseback-safari",
    category: "hotel-activities",
    title: "Horseback Safari",
    description:
      "Saddle up for a guided safari on horseback through the Mount Kenya Wildlife Conservancy. With every gentle stride, get closer to golden zebras, giraffes, and antelopes while soaking in panoramic views and the peace of nature’s rhythm.",
    hero: horseImage,
    gallery: [horseImage],
  },
  {
    id: "biking-safari",
    category: "hotel-activities",
    title: "Biking Safari",
    description:
      "Experience the thrill of a biking safari at 7,000 feet above sea level. Whether manual or pedal-assisted ebikes, your guided ride weaves through savannah trails, offering breathtaking encounters with Mount Kenya’s diverse animal residents.",
    hero: bikingImage,
    gallery: [bikingImage],
  },
  {
    id: "conservancy-walking-safari",
    category: "hotel-activities",
    title: "Conservancy Walking Safari",
    description:
      "Join our naturalist on a 2.5-hour walking journey through open savannah, accompanied by rangers. It’s a chance to connect with nature—on foot—with sightings of impalas, golden zebras, and giraffes enhancing the experience.",
    hero: walkingImage,
    gallery: [walkingImage],
  },
  {
    id: "mount-kenya-forest-nature-walk",
    category: "hotel-activities",
    title: "Mount Kenya Forest Nature Walk",
    description:
      "Delve into ancient indigenous woodland on this guided uphill walk through the Mount Kenya Forest. Discover native plants, birdlife, and the serene beauty of a landscape where elephants still roam and nature thrives.",
    hero: naturewalkImage,
    gallery: [naturewalkImage],
  },
  {
    id: "bongo-tracking",
    category: "hotel-activities",
    title: "Bongo Tracking",
    description:
      "Join expert trackers on a dawn expedition in search of the critically endangered Mountain Bongo. Guided by hoofprints and forest clues, this rare adventure offers a glimpse into one of Africa’s most elusive species in its natural habitat.",
    hero: bongoImage,
    gallery: [bongoImage],
  },
  {
    id: "breakfast-with-bongo",
    category: "hotel-activities",
    title: "Breakfast with the Endangered Mountain Bongos",
    description:
      "This immersive breakfast experience places you within the Mount Kenya Wildlife Conservancy, where you’ll enjoy a chef-curated live cooking breakfast just steps away from the rare and endangered Mountain Bongo, a peaceful encounter with conservation at heart.",
    hero: breakfastImage,
    gallery: [breakfastImage],
  },

  {
    id: "golfing",
    category: "golf",
    title: "Golf on the slopes",
    description:
      "At Old Mutual Mount Kenya Safari Club, immerse yourself in a unique golfing experience. Our meticulously manicured 9-hole, par-3 course offers breathtaking views of Mount Kenya. Whether you're a seasoned golfer or a beginner, our course provides a tranquil oasis for a rejuvenating round of golf.",
    hero: golfImage,
    gallery: [golfImage],
  },

  {
    id: "culinary-experiences",
    category: "experiences",
    title: "Culinary Experiences",
    description:
      "Enjoy floating deck dinners, fire-lit feasts, and bongo breakfasts Old Mutual Mount Kenya’s iconic in-house culinary experiences await.",
    hero: culinaryImage,
    gallery: [culinaryImage],
  },

  {
    id: "eco-safari-experiences",
    category: "experiences",
    title: "Eco Safari Experiences",
    description:
      "Connect with nature through horseback safaris, walking safari, and cultural immersion among wildlife all within Mount Kenya Wildlife Conservancy.",
    hero: ecoSafariImage,
    gallery: [ecoSafariImage],
  },

  {
    id: "kids-experiences",
    category: "experiences",
    title: "Kids Experiences",
    description:
      "Kids can enjoy archery, cooking, crafts, and garden adventures designed for fun, creativity, and nature at Old Mutual Mount Kenya Safari Club.",
    hero: kidsImage,
    gallery: [kidsImage],
  },
  {
    id: "wellness-experiences",
    category: "experiences",
    title: "Wellness Experiences",
    description:
      "Forest-view spa rituals, pergola yoga, and a heated pool Old Mutual Mount Kenya offers elevated wellness experiences surrounded by nature.",
    hero: wellnessImage,
    gallery: [wellnessImage],
  },
];

export const experiences = activities.filter(
  (activity) => activity.category === "experiences",
);

export default activities;
