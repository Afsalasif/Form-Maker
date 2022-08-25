import React from 'react'
import { Form } from 'react-bootstrap'

function Select({field_type,field_id,field_label,field_mandatory,field_placeholder,field_value,field_options}) {
  return (<>
    <Form.Label >{field_label}</Form.Label>
    <Form.Select className="mb-3" controlId="formBasicEmail" aria-label="Default select example">

    <option>Open this select menu</option>
    {field_options.length>0 &&field_options.map((option,i)=>(
            <option key={i} value={option.op_label} >{option.op_label}</option>
        ))}
  </Form.Select> </>
  )
}

export default Select