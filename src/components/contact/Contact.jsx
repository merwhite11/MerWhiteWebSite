import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

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
    <div className="outer-container text-center">
      <h1 className="display-4 mt-5">About Me</h1>

      <Row className="justify-content-center align-items-center">
        <Col className="col-7 mt-2 about-me-text">
          Hello ! Thanks for visiting my website. Before transitioning to a career in tech, I was working in vineyards which led to the creation of The Grapevine Diaries, which then led to the impetus for building this website. I love languages, studied Comparative Literature in college, and speak French and Spanish. So if you’re a word nerd like me, you can have some fun with the language toggle! My favorite language though, is dance and I’m always working on some DIY dance video which I perform, shoot and edit and then upload to YouTube.
        </Col>

      </Row>
      <h4 className="display-5">Contact</h4>
      <Row className="justify-content-center">
        <Col className="col-6">
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
            <Button className="mb-3 col-3" variant="primary" type="submit">
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
