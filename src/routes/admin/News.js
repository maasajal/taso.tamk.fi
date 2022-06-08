import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FiFacebook, FiInstagram } from "react-icons/fi";
import {
    doc,
    collection,
    getDocs,
    deleteDoc }
    from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../FirebaseConfig';
import PostNews from './PostNews';

function News() {
    // Connection of firebase table "news" to posting new news on react web app
    const newsCollectionRef = collection(db, "news");
    // Get all the news as array from firebase firestore
    const [news, setNews] = useState([]);
    // Get news from firebase firestore used useEffect
    useEffect(() => {
        const getNews = async () => {
          const data = await getDocs(newsCollectionRef);
          setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getNews();
    }, [newsCollectionRef])
    // To delete news, admin is able to delete any news content
    const deleteNews = async (id) => {
        const newsDoc = doc(db, "news", id);
        await deleteDoc(newsDoc);
    }

    return(
        <main>
            <div className='text-left'>
                <PostNews />
            </div>
            <Row xs={1} lg={1} xxl={2} className="g-4 text-left">
                {news.map((post) => {
                    return (
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                        <Card.Body>
                            <Card.Title><Card.Link href={`news/${post.heading}`} target="_blank">{post.heading}</Card.Link></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                            <Card.Text>{post.content} <br />
                                <Card.Link href={`news/${post.heading}`} target="_blank">Read more</Card.Link> <br />
                            </Card.Text>
                            <Row>
                                <Col>
                                    <Button onClick={() => {deleteNews(post.id)}}>Delete</Button>
                                </Col>
                                {/* Facebook and instagram widget  */}
                                <Col className='text-right'>
                                    <Card.Link href={``} target="_blank">
                                        <FiFacebook />
                                    </Card.Link>
                                    <Card.Link href={``} target="_blank">
                                        <FiInstagram />
                                    </Card.Link>
                                </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </main>
    )
}
export default News;
