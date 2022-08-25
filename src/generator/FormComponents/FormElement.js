import React from 'react'
import Select from '../FormElements/Select';
import Text from '../FormElements/Text';

function FormElement({field:{field_type,field_id,field_label,field_mandatory,field_placeholder,field_options,field_value}}) {
    
    switch (field_type) {
        case 'email':
            return <Text 
            field_type={field_type}
            field_id={field_id} 
            field_label={field_label} 
            field_mandatory={field_mandatory}  
            field_placeholder={field_placeholder}
            field_value={field_value}
            />;
            
        case 'text':
            return <Text 
            field_type={field_type}
            field_id={field_id} 
            field_label={field_label} 
            field_mandatory={field_mandatory}  
            field_placeholder={field_placeholder}
            field_value={field_value}
            />;
        case 'select':
            return <Select
            field_id={field_id} 
            field_label={field_label} 
            field_options={field_options}
            field_value={field_value}
            />;
        default:
            return null;
  }
  
}

export default FormElement