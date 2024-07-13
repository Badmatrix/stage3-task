import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";


export default function SocialNav() {
  return (
    <div className="flex gap-3 justify-center lg:justify-normal">
      <div className="social">
        <FaFacebookF className="text-white" />
      </div>
      <div className="social">
        <FaTwitter className="text-white" />
      </div>
      <div className="social">
        <LuInstagram className="text-white" />
      </div>
      <div className="social">
        <FaLinkedinIn className="text-white" />
      </div>
    </div>
  );
}
