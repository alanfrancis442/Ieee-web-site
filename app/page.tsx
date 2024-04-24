import Image from "next/image";
import Landing from "./components/landing";
import Events from "./components/events";
import Awards from "./components/awards";
import Execom from "./components/execom";
import Essentials from "./components/essential";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    <Landing/>
    <Events/>
    <Awards/>
    <Execom/>
    <Essentials/>
    <Footer/>
    </>
  );
}
