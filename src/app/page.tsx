import "./globals.css";
import LeftDrawer from "@/components/LeftDrawer/LeftDrawer";
import Waitlist from "@/components/Waitlist/Waitlist";

export default function Home() {
  return (
    <div className="flex h-[100%]">
      <LeftDrawer />
      <Waitlist />
    </div>
  );
}
