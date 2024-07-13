import { FaCaretDown } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";
export default function ContactFootTab() {
  return (
    <div className="footTab mx-auto text-lg lg:col-span-2  ">
      <p className="my-5">
        Join our mailing list and never miss out on amazing deals & offers.
      </p>
      <form className="">
        <input type="text" placeholder="Enter your message" className="" />
        <div>
          <input type="email" placeholder="Enter address" />
          {/* <div className=" bg-wine-700 aspect-square flex justify-center items-center align-middle p-2">
            <FaArrowRight />;
          </div> */}
        </div>
      </form>
      <ul className="lg:hidden">
        <li>
          location
          <span>
            <FaCaretDown />
          </span>
        </li>
        <li>
          mailbox
          <span>
            <FaCaretDown />
          </span>
        </li>
        <li>
          pages
          <span>
            <FaCaretDown />
          </span>
        </li>
        <li>
          resources
          <span>
            <FaCaretDown />
          </span>
        </li>
      </ul>
    </div>
  );
}


