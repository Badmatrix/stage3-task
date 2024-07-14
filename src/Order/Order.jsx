/* eslint-disable react/prop-types */

import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import TextAreaForm from "./TextAreaForm";

export default function Order({ type }) {
  return (
    <div className={`${type} space-y-8 lg:col-span-1 my-10 mt-12 lg:block`}>
      <InputForm type="text" name="firstname" value="matrix" required={true}>
        first name
      </InputForm>
      <InputForm type="text" name="lastname" value="jsx" required={true}>
        last name
      </InputForm>
      <SelectForm>state</SelectForm>
      <SelectForm>town/city</SelectForm>
      <InputForm type="text" name="number" value="+234 1234" required={true}>
        phone number
      </InputForm>
      <InputForm type="email" name="email" value="matrix@mail.com" onchange="" required={true}>
        email address
      </InputForm>
      <InputForm type="checkbox">ship to a different address</InputForm>
      <TextAreaForm value="textarea...." name="extra" />
    </div>
  );
}
