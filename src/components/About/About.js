import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../images/about img.jpg'
import'./About.css'
const About = () => {
    return (
        <div className="body-style">
            
              
               <div className="card-design">
                     
                 <Card  style={{ width: '50rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Our vision</Card.Title>
                            <Card.Text>
                            Our interactive platform makes learning active and engaging. Your team members won't just watch someone else code or read about it — they'll write and edit their own code live, practicing and applying the skill they learn in real-world situations.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                 
            
            
               </div>
               <div className="mission">
                   <h1>Our mission</h1>
                   <p>1. Structured path

The most popular option is to follow the six-month structure. Each month you are given a deadline with a number of video lessons to complete. A monthly mentor-hosted webinar allows you to discuss coursework to date, ask questions and get feedback on your assignment.</p>
<p>
2. Self-directed path

Alternatively, according to your personal time constraints, you can complete the course entirely at your own pace. As the course is delivered entirely online, it means that you’re free to complete it whenever you are free. You’ll still be able to take part in any of the webinars – either live or catching up through recordings. Once enrolled, you’ll have access to all of the course materials for twelve months.
</p>
               </div>


 <div >
     <h1>Since 2000, we've been partnering with education leaders to</h1>
     <h1>
increase equity and achievement for all students.</h1>

 <Accordion className="important-details" defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Educations leaders</Accordion.Header>
    <Accordion.Body>
    Expert mentors: Be guided by expert design mentors during monthly group sessions
Structure and flexibility: Stay motivated with a structured programme that fits into your schedule
Support: Our friendly Student Success team will help you stay on track and keep you accountable
Student community: Connect with our global student community to brainstorm, share knowledge and get ideas
Career coaching: Benefit from expert advice to help you master the UX job search and build your network
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Inquary</Accordion.Header>
    <Accordion.Body>
    You do need to be motivated and committed. We set a high bar. Studying for one of our professional qualifications requires a certain amount of time, energy and focus. Our team will be there to support you along every step of the way but success will come as a result of your own diligence.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
 </div>

        </div>
    );
};

export default About;