import SchecduledIcon from "../assets/scheduled.svg";
import PeopleIcon from "../assets/users.svg";
import ServiceProductIcon from "../assets/dashboard.svg";
import Scheduled from "@/components/Organisms/Scheduled/Scheduled";
import PeoplePanel from "@/components/Organisms/Peoplepanel/PeoplePanel";
import ServiceAndProduct from "@/components/Organisms/ServicesAnProduct/ServiceAndProduct";

export const FilterPopupLeftPanel = [
  {
    filterLeftPanelIcon: SchecduledIcon,
    filterLeftPanelText: "Scheduled Date",
    filterleftPanelDataCount: 1,
    content: Scheduled,
  },
  {
    filterLeftPanelIcon: PeopleIcon,
    filterLeftPanelText: "People",
    filterleftPanelDataCount: 0,
    content: PeoplePanel,
  },
  {
    filterLeftPanelIcon: ServiceProductIcon,
    filterLeftPanelText: "Services /Products",
    filterleftPanelDataCount: 0,
    content: ServiceAndProduct,
  },
];

export const DropDownOptionList = [
  "All",
  "Custom",
  "Last 30 days",
  "This month",
  "Last month",
  "This quarter",
  "2 quarter ago",
  "This Year",
  "Last Year",
];