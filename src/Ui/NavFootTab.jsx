export default function NavFootTab() {
  return (
    <section className="navFoot lg:grid lg:grid-cols-3 gap-3 lg:col-span-3 hidden items-center tracking-wider">
      <div className="col-span-1 ">
        <h1>location</h1>
        <p>359 Gambi Crescent, Utako, Abuja.</p>
        <h1>mailbox</h1>
        <p>hi@gmail.com</p>
      </div>

      <ul className="col-span-1">
        <h1>pages</h1>
        <li>home</li>
        <li>product</li>
        <li>about us</li>
        <li>contact</li>
      </ul>
      <ul className="col-span-1">
        <h1>resources</h1>
        <li>FAQ</li>
        <li>return policies</li>
        <li>reviews</li>
      </ul>
    </section>
  );
}
