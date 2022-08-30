import React, { useState, useEffect } from "react";
import Select from "../FormElements/Select";
import Text from "../FormElements/Text";
import FormChecker from "./FormChecker";
import FormComponent from "./FormComponent";
import { useFormContext } from "./FormContext";
function FormElement({
  field: {
    field_type,
    field_id,
    field_label,
    field_mandatory,
    field_placeholder,
    field_options,
    field_value,
    field_dep,
    dep_cond,
    field_get_data,
    pattern,
  },
  element,
}) {
  const {
    formData,
  } = useFormContext();
  const [showField, setShowField] = useState(true);

 useEffect(()=>{
  checkFieldVisibility()
 },[formData])

 const checkFieldVisibility = () => {
  if(!(field_dep && typeof dep_cond === "function")){
    setShowField(true);
    return;
  }
  setShowField(dep_cond(formData[field_dep]))
   



 }
  return (
    <div>
      {showField ? (
        <FormChecker
          field_id={field_id}
          field_label={field_label}
          field_mandatory={field_mandatory}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_type={field_type}
          field_options={field_options}
          field_get_data={field_get_data}
          pattern={pattern}
        />
      ) : null}
      
    </div>
  );
}

export default FormElement;
