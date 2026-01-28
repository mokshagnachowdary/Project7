import React, { Component } from 'react';
import './App.css';
import CourseCard from './assets/CourseCode.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
  courses: [
    { name: "Data Structures", duration: "10 hours", price: "$10", img: "dsa.png" },
    { name: "Java Programming", duration: "4 hours", price: "$170", img: "java.png" },
    { name: "React JS", duration: "30 hours", price: "$610", img: "react.png" },
    { name: "Machine Learning", duration: "20 hours", price: "$320", img: "ml.png" },
    { name: "Artificial Intelligence", duration: "25 hours", price: "$450", img: "ai.png" },
    { name: "Deep Learning", duration: "18 hours", price: "$520", img: "dl.png" }
  ]
};

  }

  render() {
    const { courses } = this.state;

    return (
      <div className="app">
        <div className="header">
        Course Catalog: 2500080020 - Mokshagna Maddineni
        </div>

        <div className="section">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <div className="footer">
          <h3>
            Copyright © 2026 All rights reserved - Mokshagna Maddineni AI/DS
          </h3>
        </div>
      </div>
    );
  }
}
