/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function Logo({className}) {
  return (
    <div className="flex justify-center md:block">
      <Link to="/">
        <img src="/images/Frame 13.svg" alt="logo" className={className} />
      </Link>
    </div>
  );
}
