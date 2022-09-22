import { NavBar } from "../components/ui/NavBar";
import { HomeContent } from "../components/ui/HomeContent";

export default function HomeMain() {
  return (
    <body className="flex flex-col">
      <NavBar />
      <HomeContent />
    </body>
  );
}
