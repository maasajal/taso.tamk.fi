import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { db } from './FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [radio, setRadio] = useState("");
  const feedBackRef = collection(db, "feedback");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(feedBackRef, {
      name: name,
      email: email,
      message: message,
      radio: radio });
    setName('');
    setEmail('');
    setMessage('');
    setRadio('');
  }

    return (
      <main>
        <h1>Feed Back</h1>
        <div className="feed-back">
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name <span>*</span></Form.Label>
                <Form.Control type="text" placeholder="Name..." required value={name} onChange={(event) => {
                  setName(event.target.value);
                }} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email <span>*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter email..." required value={email} onChange={(event) => {
                  setEmail(event.target.value);
                }} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridMessage">
              <Form.Label>Message <span>*</span></Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Type your message here..." required value={message} onChange={(event) => {
                  setMessage(event.target.value);
                }} />
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Rate TASO <span>*</span>
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    required
                    type="radio"
                    label="Very bad"
                    onChange={() => {
                      setRadio("Very bad");
                    }} value={radio}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    required
                    type="radio"
                    label="Not Good"
                    onChange={() => {
                      setRadio("Not Good");
                    }} value={radio}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    required
                    type="radio"
                    label="Medium"
                    onChange={() => {
                      setRadio("Medium");
                    }} value={radio}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    required
                    type="radio"
                    label="Helpful"
                    onChange={() => {
                      setRadio("Helpful");
                    }} value={radio}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios4"
                  />
                  <Form.Check
                    required
                    type="radio"
                    label="Very Helpful"
                    onChange={() => {
                      setRadio("Very Helpful");
                    }} value={radio}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios5"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      </main>
    );
}
export default Feedback;
