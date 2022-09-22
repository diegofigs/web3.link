import { NavBar } from "../components/NavBar";
import { HomeContent } from "../components/HomeContent";

export default function Home() {
    return (
        <div className="flex flex-col">
        <NavBar />
        <HomeContent />
        </div>
     
    )
  }