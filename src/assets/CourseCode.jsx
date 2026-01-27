import React, { Component } from 'react';

class CourseCard extends Component {
  render() {
    const { course } = this.props;
    const BASEURL = import.meta.env.BASE_URL;

    return (
      <div className="coursecard">
        <img src={BASEURL + course.img} alt="" />
        <h3>{course.name}</h3>

        <p>
          <span>Duration: </span>
          <span>{course.duration}</span>
        </p>

        <p>
          <span>Course Fee: </span>
          <span>{course.price}</span>
        </p>
      </div>
    );
  }
}

export default CourseCard;
