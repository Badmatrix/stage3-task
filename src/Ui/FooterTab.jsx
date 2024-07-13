import ContactFootTab from "./ContactFootTab";
import NavFootTab from "./NavFootTab";

export default function FooterTab() {
  return (
    <div className="lg:grid lg:grid-cols-5 lg:gap-5 w-[88%] mx-auto items-center py-5">
      <NavFootTab />
      <ContactFootTab />
    </div>
  );
}
