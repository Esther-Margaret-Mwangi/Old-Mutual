import weddingImage from "../assets/images/weddings.jpg";
import wedding1Image from "../assets/images/wedding1.jpg";
import wedding2Image from "../assets/images/weddings2.jpg";
import wedding3Image from "../assets/images/weddings3.jpg";
import meetingsImage from "../assets/images/meetings.jpg";
import socialEventsImage from "../assets/images/social evnt.jpg";
import mawingoImage from "../assets/images/mawingo.jpg";
import outdoorImage from "../assets/images/outdoor venue.jpg";
import minorImage from "../assets/images/kirinyaga minor.jpg";

const eventsData = [
  {
    id: "meetings-conferences",
    title: "Meetings & Conferences",
    cardDescription:
      "Fairmont Mount Kenya Safari Club offers room for Meetings & Event venues, including executive boardrooms and modern conference spaces.",
    heroLabel: "Meetings & Conferences",
    heading: "MEMORABLE MEETS",
    description:
      "At Fairmont Mount Kenya Safari Club, we offer the perfect setting for every occasion, from intimate board meetings to large conferences. Our elegant venues, including executive boardrooms and versatile conferencing rooms, provide an atmosphere of sophistication, ensuring every event is a success.",
    highlights: [
      "4 venues",
      "Free packing space",
      "Accommodate up to 240 guests",
    ],
    exploreTitle: "Explore Our Event Venues",
    exploreDescription:
      "Fairmont Mount Kenya Safari Club offers room for Meetings & Event venues, including executive boardrooms, Kirinyaga conference rooms, and Kirinyaga Ballroom, equipped with modern amenities, for meetings and events.",
    venueCards: [
      {
        name: "KIRINYAGA BALLROOM",
        image: meetingsImage,
      },
      {
        name: "MAWINGO BOARDROOM",
        image: mawingoImage,
      },
      {
        name: "OUTDOOR VENUES",
        image: outdoorImage,
      },
      {
        name: "KIRINYAGA MINOR BALLROOM",
        image: minorImage,
      },
    ],
    chips: [
      "HIGH SPEED WIFI",
      "UNIQUE SPACES",
      "SCENIC VIEWS",
      "DEDICATED CONCIERGE",
      "OUTDOOR SPACES",
    ],
    image: meetingsImage,
  },
  {
    id: "weddings",
    title: "Weddings",
    cardDescription:
      "Fairmont Mount Kenya Safari Club offers an array of indoor and outdoor ceremony spaces. Each unique setup creates unforgettable memories.",
    heroLabel: "Weddings",
    heading: "Your Dream Wedding, Perfectly Crafted",
    description:
      "Fairmont Mount Kenya Safari Club offers a magical wedding experience at the foot of Mount Kenya. Our historic property combines colonial charm with modern luxury. Choose from versatile venues with stunning views, from intimate gardens to elegant ballrooms. With exceptional service and attention to detail, your special day is sure to be unforgettable.",
    highlights: ["4 venues", "Versatile venues", "Capacity for 500"],
    exploreTitle: "Explore Wedding Venues",
    exploreDescription:
      "Choose from lawns, terraces, and ballrooms designed to host beautiful wedding moments. Every space can be personalized for your style and guest experience.",
    venueCards: [
      {
        image: wedding1Image,
      },
      {
        image: weddingImage,
      },
      {
        image: wedding2Image,
      },
      {
        image: wedding3Image,
      },
    ],
    chips: ["UNIQUE SPACES", "SCENIC VIEWS"],
    image: weddingImage,
  },
  {
    id: "social-events",
    title: "Social Events & Celebrations",
    cardDescription:
      "At Fairmont, we offer outdoor spaces for up to 500 guests and an elegant ballroom for up to 240 guests.",
    heroLabel: "Social Events",
    heading: "CELEBRATE IN STYLE",
    description:
      "Host birthdays, anniversaries, galas and social gatherings in distinctive indoor and outdoor venues. Our events specialists ensure smooth planning, creative setups and exceptional hospitality.",
    highlights: [
      "Up to 500 guests",
      "Flexible setups",
      "Entertainment support",
    ],
    exploreTitle: "Explore Celebration Spaces",
    exploreDescription:
      "From scenic lawns to sophisticated ballrooms, choose the setting that matches your celebration. Our team handles every detail so you can enjoy the moment.",
    venueCards: [
      {
        name: "THE GREAT LAWN",
        image:
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=700&q=80",
      },
      {
        name: "ELEGANT BALLROOM",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80",
      },
      {
        name: "TWILIGHT PATIO",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80",
      },
      {
        name: "PRIVATE LOUNGE",
        image:
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80",
      },
    ],
    chips: ["LIVE CATERING", "OUTDOOR FIREPIT", "VIP LOUNGE", "A/V SUPPORT"],
    image: socialEventsImage,
  },
];

export default eventsData;
