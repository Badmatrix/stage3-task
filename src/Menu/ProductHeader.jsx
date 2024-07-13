import HeaderIcon from "./HeaderIcon";

export default function ProductHeader() {
  return (
    <header className="md:my-20 my-12">
      <section className="grid grid-cols-3 align-middle items-center border rounded-lg w-[95%] mx-auto lg:h-[260px] md:h-[165px] h-[140px] bg-wine-300/45 overflow-hidden">
        <HeaderIcon
          img="images/mdi_shield-tick-outline.svg"
          para="certified market place since 2024"
        >
          certified
        </HeaderIcon>
        <HeaderIcon
          img="/images/iconoir_delivery.svg"
          para="fast and reliable nationwide"
        >
          shipping
        </HeaderIcon>
        <HeaderIcon
          img="/images/gravity-ui_copy-transparent.svg"
          para="seamless return experience"
        >
          transparent
        </HeaderIcon>
      </section>
    </header>
  );
}
