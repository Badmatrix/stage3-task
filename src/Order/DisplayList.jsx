/* eslint-disable react/prop-types */

export default function DisplayList({ list }) {
  return (
    <li className="displayList flex justify-between gap-5 my-4 text-xl ">
      <span className="">
        <input
          type="checkbox"
          className=" accent-wine-200 mx-3  w-5 aspect-square"
        />
      </span>
      <span>{list.location}</span>
      <span>NGN{list.price.toLocaleString()}</span>
    </li>
  );
}
