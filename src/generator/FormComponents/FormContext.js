import React, { useEffect } from "react";
import formFields from "./json";

const FormContext = React.createContext();

const FormContextProvider = (props) => {
  const [element, setElement] = React.useState(formFields);
  const [formData, setFormData] = React.useState({});
  const [emailerror,setEmailError] = React.useState('');
  const [nameError,setNameError] = React.useState(false);
  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
   

  };
  // useEffect(()=>{
  //   console.table(formData)
  // },[formData])
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
 const validName =new RegExp(
  "^[A-Za-z]{5,8}$"
 );
  const checkError =()=>{
    const name = formData['name'];
    const email =formData['email'];
    if (email){
      if (!validEmail.test(email)) {
        setEmailError(false)
    
      }else{
        setEmailError(true)
      }
    return emailerror
  
    }
    // if(name){
    //   if(!validName.test(name)){
    //       setNameError(true)
    //   }else{
    //     setNameError(false)
    //   }
    // }
    }



  return (
    <FormContext.Provider value={{ handleChange, element, setElement, formData,checkError, emailerror,nameError }}>
      {props.children}
    </FormContext.Provider>
  );
};

const useFormContext = () => React.useContext(FormContext);

export { useFormContext, FormContextProvider };
