import React from 'react';
import Courses from '../../Hooks/Courses';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import'./Services.css'
const Services = () => {
    const [courses]=Courses();
    return (
        <div className="service-design">
            <div>
                <h1>Amazing Courses</h1>
                <p>Since 2000, we've been partnering with education leaders to
increase equity and achievement for all students.</p>
            </div>
                <Row xs={1} md={4} className="g-4">
              
               {
                 courses.map(course=><Course
                  course={course} key={course.CourseName}
                 ></Course>)
               }
           
           </Row>
           </div> 
       
    );
};

export default Services;