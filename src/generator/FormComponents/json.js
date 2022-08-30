const a = {
    pageLabel: "Form Generator",
    fields: [
      { 
        field_id: "name",
        field_label: "Name",
        field_type: "text",
        field_value: "afsal",
        field_placeholder: "Enter name",
        field_mandatory: "yes",
        pattern: "^[A-Za-z]{3,6}$"
      },
      { 
        field_id: "email",
        field_label: "Email",
        field_type: "email",
        field_value: "",
        field_placeholder: "Enter Mail Id",
        feild_mandatory: "yes",
        field_dep: "name",
        dep_cond: (value) => value === "afsal",
      },
      {
        field_id: "select",
        field_label: "Select",
        field_type: "select",
        field_mandatory: "yes",
        field_value: "1",
        field_get_data: async () => {
          const option= await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
          return option
          
        }
      },
    ],
  };
  export default a;
  