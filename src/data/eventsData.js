import weddingImage from "../assets/images/weddings.jpg";
import wedding1Image from "../assets/images/wedding1.jpg";
import wedding2Image from "../assets/images/weddings2.jpg";
import wedding3Image from "../assets/images/weddings3.jpg";
import meetingsImage from "../assets/images/meetings.jpg";
import socialEventsImage from "../assets/images/social evnt.jpg";
import mawingoImage from "../assets/images/mawingo.jpg";
import outdoorImage from "../assets/images/outdoor venue.jpg";
import minorImage from "../assets/images/kirinyaga minor.jpg";
import { MenuSquare } from "lucide-react";

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
    exploreTitle: "",
    exploreDescription: "",
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
    heading: "Exceptional service for every occasion",
    description:
      "From an elegant Nairobi ballroom dinner to exclusive parties, our culinary team excels at satisfying guests with classic cuisines and premium drinks. We cater to dietary restrictions, ensuring every guest enjoys a delightful dining experience.",
    highlights: [
      "8 venues",
      "250 parking spaces",
      "Maximum Capacity - 300 guests",
    ],
    exploreTitle: "",
    exploreDescription: "",
    venueCards: [],
    chips: [
      "CENTRAL LOCATION",
      "OUTDOOR SPACES",
      "CULINARY CREATIVITY",
      "CUSTOMIZED MENUS",
    ],
    image: socialEventsImage,
  },
];

export default eventsData;
