import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const CourseDetails = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const { id } = useParams();
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  useEffect(() => {
    const findCourse = courseDetails.find((course) => course.id === id);
    setCourseDetail(findCourse);
  }, [id, courseDetails]);

  const { name, image, price, course_details } = courseDetail;

  return (
    <div>
      <Navbar></Navbar>
      <div className="card">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{course_details}</p>
          <div className="card-actions justify-end items-center">
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
