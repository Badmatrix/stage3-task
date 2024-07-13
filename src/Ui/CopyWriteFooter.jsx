import Logo from "./Logo";
import SocialNav from "./SocialNav";

export default function CopyWriteFooter() {
  return (
    <div className="bg-black py-5 lg:flex lg:justify-between lg:flex-row-reverse lg:items-center lg:px-5 pt-10 pb-3 lg:pt-5 ">
      
        <SocialNav />
        <div className="flex gap-3 text-center justify-center lg:justify-normal my-5 lg:my-0">
          <Logo className={"w-24"} />
          <p className="copyright text-white text-sm tracking-wider">
            &copy;2024. All right reserved
          </p>
        </div>
     
    </div>
  );
}
