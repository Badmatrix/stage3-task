/* eslint-disable react/prop-types */
export default function TextAreaForm({ value, onchange, name }) {
  return (
    <div className=" pt-5">
      <div className="space-y-6">
        <label className="capitalize lg:text-xl font-bold ">
          order notes (optional)
        </label>
        <textarea
          defaultValue={value}
          onChange={onchange}
          name={name}
          
          className=" rounded-lg outline outline-1 outline-wine-900 block bg-newgray-700  w-full py-1 h-20"
        ></textarea>
      </div>
    </div>
  );
}
