import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Col, Row, Card } from "react-bootstrap";
import React from "react";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      {/* Testimonials Section */}
      {/* <Row className="new-email-bx" style={{Color:'black'}}>
        <Col lg={4} md={6} className="testimonial" style={{Color:'black'}}>
          <Card className="h-100">
            <Card.Body>
            <small>- John Doe</small>
              <Card.Footer>
                
                <Card.Text>
                "This service has changed my life for the better! Highly recommended."
              </Card.Text>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="testimonial">
          <Card className="h-100">
            <Card.Body>
            <small>- Jane Smith</small>
              <Card.Footer>
               
                <Card.Text>
                "Amazing experience! I can't imagine going back to how things were before."
              </Card.Text>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="testimonial">
          <Card className="h-100">
            <Card.Body>
            <small>- Michael Brown</small>
              <Card.Footer>
             
                <Card.Text>
                "Great support and fantastic results. I'm very impressed."
              </Card.Text>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* Newsletter Section */}
      
      
    </>
  );
};
