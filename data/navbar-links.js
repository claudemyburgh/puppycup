import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const mainNavigation = [
  { name: "Home", icon: HomeIcon, href: "#", current: true },
  { name: "Blog", icon: UsersIcon, href: "/posts", current: false },
  { name: "Listings", icon: UsersIcon, href: "#", current: false },
];
const secondaryNavigation = [
  { name: "Website redesign", href: "#" },
  { name: "GraphQL API", href: "#" },
  { name: "Customer migration guides", href: "#" },
  { name: "Profit sharing program", href: "#" },
];

export { mainNavigation, secondaryNavigation };
