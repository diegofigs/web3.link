import { NavBar } from "../components/ui/NavBar";
import { HomeContent } from "../components/ui/HomeContent";

export default function HomeMain() {
    return (
        <div className="flex flex-col">
        <NavBar />
        <HomeContent />
        </div>
     
    )
  }