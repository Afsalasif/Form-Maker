import React, { useState } from 'react'
import { Container, Form ,Col } from 'react-bootstrap'
import { useFormContext } from '../FormComponents/FormContext';
import {debounce} from 'lodash'

function Text({field_type,field_id,field_label,field_mandatory,field_placeholder,field_value,pattern}) {
  const{handleChange}=useFormContext()
  const [ermessage,setErMessage]=useState('')
  const {checkError,emailerror,nameError} = useFormContext();
  
  
  // const handleText = debounce((e)=>{
  //   handleChange(e)
  // },1000);
  const handleText =debounce((e)=>{
    handleChange(e)
  },1000)

 
  return (
    <Container >
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >{field_label}</Form.Label>
        
        <Form.Control name={field_id} onChange={(e)=>handleText(e)} type={field_type==='email'?'email':'text'} minLength={field_type==='email'?0:4} maxLength={100} placeholder={field_placeholder} required="true" />
        { field_type==='email'&& <Form.Control.Feedback type="invalid">
              "enter corect mail"
            </Form.Control.Feedback> }
        { field_type==='text'&&
        <Form.Control.Feedback type="invalid">
              please enter more than 4 letter
            </Form.Control.Feedback>
        }
      </Form.Group>
    </Container>
  )
      }

export default Text