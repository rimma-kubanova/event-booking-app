import Image from "next/image";
import Navbar from "./components/navbar";
import Events from "./events/page";

export default function Home() {
  return (
    <main>
      <div className="mx-60 my-12">
        <h1>⭐ Events for you!</h1>
        <Events />
      </div>
    </main>
  );
}
