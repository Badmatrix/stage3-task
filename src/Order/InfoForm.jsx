/* eslint-disable react/prop-types */
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import TextAreaForm from "./TextAreaForm";

export default function InfoForm({ type }) {
  return (
    <div
      className={`${type} space-y-8 py-2  lg:col-span-1 my-10 mt-12 lg:block`}
    >
      <InputForm type="text">first name</InputForm>
      <InputForm type="text">last name</InputForm>
      <SelectForm>state</SelectForm>
      <SelectForm>town/city</SelectForm>
      <InputForm type="text">phone number</InputForm>
      <InputForm type="email">email address</InputForm>
      <InputForm type="checkbox">ship to a different address</InputForm>

      <TextAreaForm />
    </div>
  );
}
