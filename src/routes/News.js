import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    collection,
    getDocs }
    from 'firebase/firestore';
  import { useEffect, useState } from 'react';
  import { db } from './FirebaseConfig';

function News() {

    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "news");

    useEffect(() => {
        const getNews = async () => {
          const data = await getDocs(newsCollectionRef);
          setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getNews();
      }, [])


    return(
        <main>
            <Row xs={1} lg={1} xxl={2} className="g-4 text-left">
                {news.map((post) => {
                    return (
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                        <Card.Body>
                            <Card.Title><Card.Link href={`news/${post.heading}`} target="_blank">{post.heading}</Card.Link></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                            <Card.Text>{post.content}</Card.Text>
                            <Card.Link href={`news/${post.heading}`} target="_blank">Read more</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>

            {/* <Row xs={1} lg={1} xxl={2} className="g-4 text-left">
                <Col>
                    <Card>
                    <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                    <Card.Body>
                        <Card.Title><Card.Link href="#">TASO new webpage</Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25.05.2022</Card.Subtitle>
                        <Card.Text>
                            Tampereen sähköopiskelijat TASO ry is published their new webpage on 6.6.22.
                        </Card.Text>
                        <Card.Link href="#">Read more</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                    <Card.Body>
                        <Card.Title><Card.Link href="#">TASO new webpage</Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25.05.2022</Card.Subtitle>
                        <Card.Text>
                            Tampereen sähköopiskelijat TASO ry is published their new webpage on 6.6.22.
                        </Card.Text>
                        <Card.Link href="#">Read more</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                    <Card.Body>
                        <Card.Title><Card.Link href="#">TASO new webpage</Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25.05.2022</Card.Subtitle>
                        <Card.Text>
                            Tampereen sähköopiskelijat TASO ry is published their new webpage on 6.6.22.
                        </Card.Text>
                        <Card.Link href="#">Read more</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                    <Card.Body>
                        <Card.Title><Card.Link href="#">TASO new webpage</Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25.05.2022</Card.Subtitle>
                        <Card.Text>
                            Tampereen sähköopiskelijat TASO ry is published their new webpage on 6.6.22.
                        </Card.Text>
                        <Card.Link href="#">Read more</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="images/news/newsPic.jpeg" />
                    <Card.Body>
                        <Card.Title><Card.Link href="#">TASO new webpage</Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25.05.2022</Card.Subtitle>
                        <Card.Text>
                            Tampereen sähköopiskelijat TASO ry is published their new webpage on 6.6.22.
                        </Card.Text>
                        <Card.Link href="#">Read more</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </main>
    )
}
export default News;
