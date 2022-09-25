import { NavBar } from "../components/ui/NavBar";
import { HomeContent } from "../components/ui/HomeContent";

export default function HomeMain() {
  return (
    <div className="flex flex-col homeBg w-screen h-screen">
      <NavBar />
      <HomeContent />
    </div>
  );
}
