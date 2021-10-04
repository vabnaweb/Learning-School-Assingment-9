import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Courses from '../../Hooks/Courses';

import imgA from '../../images/img1.jpg';
import imgB from '../../images/img2.jpg';
import imgC from '../../images/img3.jpg';
import Course from '../Course/Course';
import "./Home.css";

const Home = () => {
  const [courses]=Courses();
  
  

    return (
        <div className="home-body">
          <div className="website-name">
            <h1>LEARNING SCHOOL</h1>
          </div>
            <section>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 img-size"
      src={imgA}
      alt="First slide"
    />
    <Carousel.Caption className="title">
      <h1>Bringing You a positive and awakening</h1>
      <h1>perspective on your future</h1>
      <p>So students experience better learning, better lives.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 img-size"
      src={imgB}
      alt="Second slide"
    />
    <Carousel.Caption className="title">
      <h1>Bringing You a positive and awakening</h1>
      <h1>perspective on your future</h1>
      <p>So students experience better learning, better lives.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src={imgC}
      alt="Third slide"
    />
    <Carousel.Caption className="title">
      <div>
      <h1>Bringing You a positive and awakening</h1>
      <h1>perspective on your future</h1>
      <p>So students experience better learning, better lives.</p>
      </div>
      <div>

      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </section>
            
           <div>
           <div>
             <h1>Recent Courses</h1>
             <p> These courses are highly demanded courses .you can find more courses in service folder</p>
           </div>
               
               <Row xs={1} md={4} className="g-4 ">
              
              {
                courses.slice(0,4).map(course=><Course
                 course={course} key={course.CourseName}
                ></Course>)
              }
          
          </Row>
             
               
               
              
           </div>
          
       </div> 
    );
};

export default Home;