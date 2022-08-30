import React from 'react'
import { Container } from 'react-bootstrap'
import Text from '../FormElements/Text';
import Select from '../FormElements/Select';

function FormChecker({field_type, field_id, field_label, field_mandatory, field_placeholder, field_options, field_value,field_dep,field_get_data,pattern}) {
   
    switch (field_type) {
        case 'email':
            return <Text 
            field_type={field_type}
            field_id={field_id} 
            field_label={field_label} 
            field_mandatory={field_mandatory}  
            field_placeholder={field_placeholder}
            field_value={field_value}
            field_dep={field_dep}
            />;
        case 'text':
            return <Text 
            field_type={field_type}
            field_id={field_id} 
            field_label={field_label} 
            field_mandatory={field_mandatory}  
            field_placeholder={field_placeholder}
            field_value={field_value}
            field_dep={field_dep}
            pattern={pattern}
            />;
        case 'select':
            return <Select
            field_id={field_id} 
            field_label={field_label} 
            field_options={field_options}
            field_value={field_value}
            field_get_data={field_get_data}
            />;
        default:
            return null;
  }

}

export default FormChecker