/* eslint-disable react/prop-types */

import HeaderImage from "./HeaderImage";
import ImageText from "./ImageText";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative w-full bg-wine-400 h-[300px]">
      <HeaderImage />
      <ImageText />
      <Navbar />
    </header>
  );
}
