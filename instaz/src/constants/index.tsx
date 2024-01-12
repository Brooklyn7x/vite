import {
  ArrowDownWideNarrow,
  BookMarkedIcon,
  Bookmark,
  Camera,
  Globe,
  HomeIcon,
  PlusSquareIcon,
  PowerSquareIcon,
  Save,
  User,
} from "lucide-react";

export const sidebarLinks = [
  {
    icons: <HomeIcon />,
    route: "/",
    label: "Home",
  },
  {
    icons: <Globe />,
    route: "/explore",
    label: "Explore",
  },
  {
    icons: <User />,
    route: "/all-users",
    label: "People",
  },
  {
    icons: <Bookmark />,
    route: "/saved",
    label: "Saved",
  },
  {
    icons: <PlusSquareIcon />,
    route: "/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    icons: <HomeIcon />,
    route: "/",
    label: "Home",
  },
  {
    icons: <Globe />,
    route: "/explore",
    label: "Explore",
  },
  {
    icons: <PlusSquareIcon />,
    route: "/create-post",
    label: "Create",
  },
  {
    icons: <Bookmark />,
    route: "/saved",
    label: "Saved",
  },

  // {
  //   icons: <Camera />,
  //   route: "/creat",
  //   label: "Create",
  // },
];
