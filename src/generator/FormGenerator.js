import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import FormComponent from "./FormComponents/FormComponent";
import { useFormContext } from "./FormComponents/FormContext";
function FormGenerator() {
  const [input, setInput] = useState("");
  const { element, setElement } = useFormContext();
  const [isbutton, setIsbutton] = useState(false);
  const handleSubmit = () => {
    try {
      setElement(JSON.parse(input));
    } catch (e) {
      console.error(e);
    }
  };
  const showFormFields = element && Array.isArray(element?.fields);

  return (
    <div>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Make a Form
        </h1>
        <Row className="mt-5">
          <Col
            lg={12}
            md={12}
            sm={12}
            className="pt-5 shadow-sm m-auto rounded-lg  "
          >
            <Form className="w-full">
              <Form.Group className="mb-3">
                <Form.Label>Enter the string</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your json for generating the form "
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3"></Form.Group>
             
            </Form>
            <Button type="submit" className="mt-2 mb-2 " onSubmit={handleSubmit}>
              Generate
            </Button>
          </Col>
        </Row>
        <Stack gap={3}>
          {showFormFields && <FormComponent  />}
        </Stack>
      </Container>
    </div>
  );
}

export default FormGenerator;
