import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    addDoc,
    collection }
    from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../FirebaseConfig';
import Modal from 'react-bootstrap/Modal'


function PostNews() {

    const newsCollectionRef = collection(db, "news");

    // Variable To create new news to firebase and showing it in react web app
    const [newsHeading, setHeading] = useState("");
    const [newsDate, setNewsDate] = useState("");
    const [newsContent, setContent] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addDoc(newsCollectionRef, { heading: newsHeading, date: newsDate, content: newsContent });
        setHeading('');
        setNewsDate('');
        setContent('');
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create News
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create a new news</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridHeading">
                    <Form.Label>News Headline</Form.Label>
                    <Form.Control type="text" placeholder="*Headline..." autoFocus required value={newsHeading} onChange={(event) => {
                        setHeading(event.target.value);
                        }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridDate">
                    <Form.Label>Post date</Form.Label>
                    <Form.Control type="date" required value={newsDate} onChange={(event) => {
                        setNewsDate(event.target.value);
                        }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMessage">
                    <Form.Label>News Content</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="*Type news here..." required value={newsContent} onChange={(event) => {
                        setContent(event.target.value);
                        }} />
                </Form.Group>
                <hr />
                <Button variant="primary" type="submit" onClick={handleClose}>
                Post news
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default PostNews;
