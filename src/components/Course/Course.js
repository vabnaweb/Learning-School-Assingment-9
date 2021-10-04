import React from 'react';
import { Card, Col } from 'react-bootstrap';
import'./Course.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';


const Course = (props) => {
   const {CourseName,Cost,Teacher,img,Enroll}=props.course;
   const element = <FontAwesomeIcon icon={faUser} />

    return (
        <Col>
      <Card className="card-container shadow-lg p-3 mb-5 bg-body rounded">
        <Card.Img  variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{CourseName}</Card.Title>
          <Card.Text>
               <h5 >{Cost}</h5>
               <h6 className="teacher">course by:{Teacher}</h6>
               <p className="enroll">Enroll: {element}{Enroll}</p>
               <Link  to={'/contract'}> <Button className="btn-clr">EnrollNow</Button></Link>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;