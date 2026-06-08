import horseImage from "../assets/images/horse.jpg";
import bikingImage from "../assets/images/biking.jpg";
import walkingImage from "../assets/images/walking.jpg";
import naturewalkImage from "../assets/images/ecosafari.jpg";
import bongoImage from "../assets/images/bongo.jpg";
import breakfastImage from "../assets/images/breakfast.jpg";
import poolImage from "../assets/images/pool bar.jpg";
import roomImage from "../assets/images/room1.jpg";
import outdoorImage from "../assets/images/outdoor venue.jpg";
import fairmontImage from "../assets/images/fairmont2.jpg";
import bungalowsImage from "../assets/images/bungallow1.jpg";

export const activityCategories = [
  { id: "hotel-activities", label: "Hotel Activities" },
  { id: "golf", label: "Golf" },
  { id: "experiences", label: "Experiences" },
];

const activities = [
  {
    id: "swimming-pool",
    category: "hotel-activities",
    title: "Swimming Pool & Leisure",
    description:
      "Unwind in our heated outdoor pool surrounded by manicured gardens and sweeping views of Mount Kenya. Poolside loungers, attentive service, and a relaxed atmosphere make it the perfect midday escape.",
    hero: poolImage,
    gallery: [poolImage],
  },
  {
    id: "tennis-courts",
    category: "hotel-activities",
    title: "Tennis Courts",
    description:
      "Enjoy a friendly match on our well-maintained courts set within the club grounds. Equipment is available on request, with coaching sessions that can be arranged for players of all levels.",
    hero: outdoorImage,
    gallery: [outdoorImage],
  },
  {
    id: "fitness-centre",
    category: "hotel-activities",
    title: "Fitness Centre",
    description:
      "Stay active in our fully equipped gym with cardio machines, free weights, and strength equipment. Open daily for guests who want to keep up their routine while enjoying a mountain retreat.",
    hero: roomImage,
    gallery: [roomImage],
  },
  {
    id: "croquet-lawn",
    category: "hotel-activities",
    title: "Croquet on the Lawn",
    description:
      "A timeless Fairmont tradition on the club's sweeping lawns. Gather friends or family for a leisurely game of croquet in the crisp highland air, with Mount Kenya as your backdrop.",
    hero: bungalowsImage,
    gallery: [bungalowsImage],
  },
  {
    id: "mount-kenya-golf-course",
    category: "golf",
    title: "Mount Kenya Golf Course",
    description:
      "Play one of the world's highest golf courses at 7,000 feet above sea level. This historic nine-hole course offers challenging fairways, stunning alpine scenery, and a truly unforgettable round.",
    hero: fairmontImage,
    gallery: [fairmontImage],
  },
  {
    id: "golf-lessons",
    category: "golf",
    title: "Golf Lessons & Clinics",
    description:
      "Refine your swing with personalised instruction from our resident golf professional. Lessons and group clinics are available for beginners and experienced players alike.",
    hero: outdoorImage,
    gallery: [outdoorImage],
  },
  {
    id: "horseback-safari",
    category: "experiences",
    title: "Horseback Safari",
    description:
      "Saddle up for a guided safari on horseback through the Mount Kenya Wildlife Conservancy. With every gentle stride, get closer to golden zebras, giraffes, and antelopes while soaking in panoramic views and the peace of nature’s rhythm.",
    hero: horseImage,
    gallery: [horseImage],
  },
  {
    id: "biking-safari",
    category: "experiences",
    title: "Biking Safari",
    description:
      "Experience the thrill of a biking safari at 7,000 feet above sea level. Whether manual or pedal-assisted ebikes, your guided ride weaves through savannah trails, offering breathtaking encounters with Mount Kenya’s diverse animal residents.",
    hero: bikingImage,
    gallery: [bikingImage],
  },
  {
    id: "conservancy-walking-safari",
    category: "experiences",
    title: "Conservancy Walking Safari",
    description:
      "Join our naturalist on a 2.5-hour walking journey through open savannah, accompanied by rangers. It’s a chance to connect with nature—on foot—with sightings of impalas, golden zebras, and giraffes enhancing the experience.",
    hero: walkingImage,
    gallery: [walkingImage],
  },
  {
    id: "mount-kenya-forest-nature-walk",
    category: "experiences",
    title: "Mount Kenya Forest Nature Walk",
    description:
      "Delve into ancient indigenous woodland on this guided uphill walk through the Mount Kenya Forest. Discover native plants, birdlife, and the serene beauty of a landscape where elephants still roam and nature thrives.",
    hero: naturewalkImage,
    gallery: [naturewalkImage],
  },
  {
    id: "bongo-tracking",
    category: "experiences",
    title: "Bongo Tracking",
    description:
      "Join expert trackers on a dawn expedition in search of the critically endangered Mountain Bongo. Guided by hoofprints and forest clues, this rare adventure offers a glimpse into one of Africa’s most elusive species in its natural habitat.",
    hero: bongoImage,
    gallery: [bongoImage],
  },
  {
    id: "breakfast-with-bongo",
    category: "experiences",
    title: "Breakfast with the Endangered Mountain Bongos",
    description:
      "This immersive breakfast experience places you within the Mount Kenya Wildlife Conservancy, where you’ll enjoy a chef-curated live cooking breakfast just steps away from the rare and endangered Mountain Bongo, a peaceful encounter with conservation at heart.",
    hero: breakfastImage,
    gallery: [breakfastImage],
  },
];

export const experiences = activities.filter(
  (activity) => activity.category === "experiences",
);

export default activities;
