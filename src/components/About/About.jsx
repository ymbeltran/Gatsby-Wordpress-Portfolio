import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
// import AboutImg from '../Image/AboutImg';
// import Img from 'gatsby-image';
import PortfolioContext from '../../context/context';
import { useAboutQuery } from '../../hooks/useAboutQuery';

var la;

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { resume } = about;
  const { wpPage } = useAboutQuery();
  la = wpPage.content;
  var img = wpPage.featuredImage.node.localFile.url;
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  //const deta = 'lorem <b>ipsum</b>';
  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img className="rounded shadow-lg" src={img} alt="profile picture" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <article className='me-text' dangerouslySetInnerHTML={createMarkup()} />
              <div className="about-wrapper__info">
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

function createMarkup() {
  return {__html: la};
}
export default About;