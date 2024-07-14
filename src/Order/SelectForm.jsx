/* eslint-disable react/prop-types */

export default function SelectForm({ children }) {
  return (
    <div className="w-full">
      <label className=" capitalize lg:text-xl font-bold space-y-4">
        {children} <span className="text-wine-400">*</span>
        <select
          name=""
          id=""
          className="rounded-lg outline outline-1 outline-wine-900 block bg-newgray-700 my-3 w-full py-1"
        >
          <option value="state">state/town</option>
        </select>
      </label>
    </div>
  );
}
