import React from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import Nothing from '../FormElements/Nothing'
import FormElement from './FormElement'

function FormComponent({ fields, page_label }) {

   return(
        
       
            <Container className='shadow text-danger mt-5 p-3 rounded '>
                <h1>{page_label}</h1>
                <Row className="mt-5">
                    <Col lg={6} md={6} sm={12} className="pt-5 shadow-sm m-auto rounded-lg  " >
                        <Form>
    
                            {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) :null}
    
                        </Form>
    
                    </Col>
                </Row>
    
            </Container>
   )
        
        

    
    
  
}

export default FormComponent