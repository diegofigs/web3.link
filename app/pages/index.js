import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { HomeContent } from "../components/HomeContent";

export default function Home() {
  return (
    <div className="GeneralBG">
      <div>
        <NavBar />
      </div>
      <div>
        <HomeContent />
      </div>
    </div>
  );
}
