import InboxIcon from "../assets/inbox.svg";
import SubscripitonIcon from "../assets/subscription.svg";
import CollectionIcon from "../assets/calendar.svg";
import WaitlistIcon from "../assets/hourglass.svg";
import DashboardIcon from "../assets/dashboard.svg";
import OpenDashboardLink from "../assets/dashboard-secondary.svg";
import UserImage from "../assets/user-image.svg";
import DownArrow from "../assets/down-arrow.svg";
import HelpCenterIcon from "../assets/help-center.svg";
import GlobeIcon from "../assets/globe.svg";

export const LeftDrawerItem = [
  {
    itemIcon: InboxIcon,
    itemName: "Orders",
  },
  {
    itemIcon: SubscripitonIcon,
    itemName: "Subscriptions",
  },
  {
    itemIcon: CollectionIcon,
    itemName: "Collections",
  },
  {
    itemIcon: WaitlistIcon,
    itemName: "Waitlist",
  },
];

export const DashboardData = {
  dashboardIcon: DashboardIcon,
  dashboardName: "Dashboard",
  dashboardRouteIcon: OpenDashboardLink,
};

export const UserDataCard = {
  userProfileImage: UserImage,
  userName: "Karan Kumar",
  userEmail: "adminname@mail.com",
  userCardDownArrow: DownArrow,
};

export const HelpCenterData = {
  helpCenterIcon: HelpCenterIcon,
  helpCenterTitle: "Help Center",
  helpCenterDescription: "@2024 Omnify.Inc. ",
};

export const LocationData = {
  globeIcon: GlobeIcon,
  locationTime: "08:30 AM ",
  locationDate: "Tue 20 Jan",
  locationTimeGap: "UTC: +5hrs",
  locationDataDownArrow: DownArrow,
};
