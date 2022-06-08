import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    return(
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="banner-1.jpeg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>FRONT PAGE</h3>
                    <p>Tampereen Sähköopiskelijat, TASO ry is a subject club for students of electrical and automation engineering at TAMK.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="banner-4.jpeg"
                    alt="Our Team"
                    />

                    <Carousel.Caption>
                    <h3>PROCEEDINGS</h3>
                    <p>TASO ry organizes various events for its members, such as company visits, excursions, various leisure events, and seminars in the field.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="banner-5.jpeg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>MEMBERSHIP</h3>
                    <p>TASO ry’s membership fee is a paltry €5/academic year, and you can join through Kide.app.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Banner;
