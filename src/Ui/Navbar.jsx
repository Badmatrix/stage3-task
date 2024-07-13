/* eslint-disable react/prop-types */

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchForm from "./SearchForm";

export default function Navbar() {
  
  return (
    <div className="md:flex justify-between items-center bg-wine-700/75  absolute  top-0 w-full  px-5  py-2 pb-10 md:pb-7 lg:pb-5 ">
      <NavLinks />
      <Logo className="w-32 md:w-44 lg:w-56 xl:w-64"/>
      <SearchForm />
    </div>
  );
}
