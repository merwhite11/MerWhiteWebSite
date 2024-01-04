import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mx737u9', 'template_2mbi7z8', form.current, '9mhs31lko65GQrS_o')
      .then((result) => {
          setEmailSent(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  let thankYouNote;
  if(emailSent) thankYouNote = <div>Message sent! Thanks for writing 🤗</div>

  return (

    <Container className="d-flex justify-content-center">
      <Form className="d-flex flex-column justify-content-center" onSubmit={(e) => sendEmail(e)} ref={form}>
      <Row>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="user_name" placeholder="Your name" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Your email" />
          <Form.Text className="text-muted">
            For replying-to-you purposes only!
          </Form.Text>
        </Form.Group>
      </Row>

      <Row>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="message" name="message" placeholder="I'd love to hear from you!" />
        </Form.Group>

      </Row>
      <Button variant="primary" type="submit">
        Send
      </Button>
      {thankYouNote}
    </Form>
  </Container>
  );
};

export default Contact;
