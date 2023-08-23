import { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Row, Alert, Form } from "react-bootstrap";
import { getFunctions, httpsCallable } from "firebase/functions";
import { functions } from "../../firebase/config";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const sendMessage = httpsCallable(functions, "sendContactEmail");

  return (
    <Container className="mt-4 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {submitSuccess && (
            <Alert variant="success">Form submitted successfully!</Alert>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // Handle form submission logic here
              sendMessage({
                name: values.name,
                email: values.email,
                message: values.message,
              })
                .then((result) => {
                  console.log(result.data);
                  resetForm();
                  setSubmitSuccess(true);
                  setTimeout(() => {
                    setSubmitSuccess(false);
                  }, 5000);
                })
                .catch((error) => {
                  console.log(error.message);
                });
              console.log(values);
            }}
          >
            {({
              errors,
              touched,
              isSubmitting,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className={`${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    as="textarea"
                    name="message"
                    placeholder="Enter your message"
                    className={`${
                      touched.message && errors.message ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>

                <Button
                  className="mt-2"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
