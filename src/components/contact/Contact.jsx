import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AppNavbar from '../AppNavbar.jsx';

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
  if (emailSent) thankYouNote = <div>Message sent! Thanks for writing 🤗</div>

  return (
    <div className="background subpage-container text-center">
      <AppNavbar></AppNavbar>
      <h1 className="display-4 pb-3 subpage-header">Interview With Myself</h1>
<Container className="d-flex flex-column">

      <Row className="justify-content-center align-items-center">
        <Col className="col-12 col-sm-7 mt-2 about-me-text p-text">
        <div class="container">
    <h4>Why'd you switch to tech?</h4>
    <ul class="list-group p-2">
      <li class="list-group-item">To work the desk-job equivalent of agricultural field labor, at the ground level</li>
      <li class="list-group-item">and to learn how to build out ideas that can benefit others</li>
    </ul>
    <h4>Favorite things about coding?</h4>
    <ul class="list-group p-2">
      <li class="list-group-item">Seeing an idea take shape through iteration</li>
      <li class="list-group-item">The feeling of getting unstuck after many, many moons</li>
    </ul>
    <h4>What are your goals?</h4>
    <ul class="list-group p-2">
      <li class="list-group-item">Deepen my tech skills (front-end especially!)</li>
      <li class="list-group-item">Build and collaborate - reach out below if you'd like to work together!</li>
    </ul>
  </div>

        </Col>

      </Row>
</Container>
      <h4 className="display-5 pt-5 subpage-header">Contact</h4>
      <Row className="justify-content-center">
        <Col className="col-10 col-sm-6">
          <Form className="d-flex flex-column text-start" onSubmit={(e) => sendEmail(e)} ref={form}>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-start">Name</Form.Label>
              <Form.Control type="name" name="user_name" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Your email" />
              <Form.Text className="text-muted">
                For replying-to-you purposes only!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <textarea className="form-control" rows="3" placeholder="I'd love to hear from you!"></textarea>
            </Form.Group>
            <div className="d-flex justify-content-center">
            <Button className="mb-3 col-12 col-sm-4 send-btn" variant="primary" type="submit">
              Send
            </Button>
            {thankYouNote}
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
