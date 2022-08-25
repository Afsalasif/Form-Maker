import React from 'react'
import { Container, Form ,Col } from 'react-bootstrap'

function Text({field_type,field_id,field_label,field_mandatory,field_placeholder,field_value}) {
  return (
    <Container >
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >{field_label}</Form.Label>
        
        <Form.Control type={field_type==='email'?'email':'text'} placeholder={field_placeholder} required={field_mandatory} />
        
        
      </Form.Group>
    </Container>
  )
}

export default Text