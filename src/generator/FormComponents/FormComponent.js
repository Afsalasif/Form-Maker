import React,{useEffect, useId, useState} from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Nothing from "../FormElements/Nothing";
import FormElement from "./FormElement";
import { useFormContext } from "./FormContext";

function FormComponent({ page_label }) {
  const {  element:{ pageLabel, fields} } = useFormContext();
  const [validated, setValidated] = useState(false);
  const {checkError,errormessage,formData} = useFormContext();
  const heySubmit =(e)=>{
    e.preventDefault();
    const form=e.currentTarget
    
    if ((form.checkValidity()&&checkError()) === true) {
      console.log(checkError())
      e.stopPropagation();
    }

    setValidated(true);
  };
    
  
 
 


  

  




  
    
  

  return (
    <Container className="shadow text-danger mt-5 p-3 rounded ">
      <h1>{pageLabel}</h1>
      <Row className="mt-5">
        <Col
          lg={6}
          md={6}
          sm={12}
          className="pt-5 shadow-sm m-auto rounded-lg  "
        >
          <Form onSubmit={heySubmit} noValidate validated={validated}>
            {fields
              ? fields.map((field, i) => (
                  <FormElement key={field.field_id} field={field}  />
                ))
              : null}
              <Button type="submit"  >FormChecker</Button>
          </Form>
          
          
          <h1>{errormessage}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default FormComponent;
