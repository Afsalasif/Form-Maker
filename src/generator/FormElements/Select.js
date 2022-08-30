import React,{useCallback, useEffect, useState} from 'react'
import { Form } from 'react-bootstrap'
import { useFormContext } from '../FormComponents/FormContext'

import { Country, State, City }  from 'country-state-city';

function Select({field_type,field_id,field_label,field_mandatory,field_placeholder,field_value,field_options,field_get_data}) {
  const{handleChange}=useFormContext()
  const[datas,setDatas]=useState({})
  const [countries,setCountries]=useState({})
  const [states,setStates]=useState({})
  const {formData} = useFormContext();
  React.useEffect(()=>{
    if( typeof  field_get_data === "function"){
      getDropDownOptions()
    }

  },[])
  useEffect(()=>{
    const b = formData[field_id]
    const c= State.getStatesOfCountry(b)
    setStates(c)
  },[formData])


  const getDropDownOptions = async () => {
    // const options = await field_get_data()
    // field_get_data().then((res)=>res.json()).then((data)=>{
      
    //   setDatas(data.data)
    // })
    const a =Country.getAllCountries()
    setCountries(a)
  }
    
    

     
      
    
  
  


  return (<>
    <Form.Label >{field_label} country</Form.Label>
    <Form.Select name={field_id} required={field_mandatory} onChange={handleChange} className="mb-3" controlId="formBasicEmail" aria-label="Default select example">

    <option value="" disabled >Select your option</option>
    {countries.length>0 &&countries.map((option,i)=>(
            <option key={i} value={option.isoCode} >{option.name}</option>
        ))} 
  </Form.Select>
  <Form.Select name="state" required onChange={handleChange} className="mb-3" controlId="formBasicEmail" aria-label="Default select example">

    
    {states.length>0 &&states.map((option,i)=>(
            <option key={i} value={option.name} >{option.name}</option>
        ))} 
  </Form.Select>
   </>
  )
}

export default Select