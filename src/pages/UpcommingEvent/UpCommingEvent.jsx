import { useEffect, useState } from "react";
import { MdCalendarMonth, MdLocationOn, MdTimer } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const UpCommingEvent = () => {
  const [latestEvent, setLatestEvent] = useState({});
  const { id } = useParams();
  const latestEvents = useLoaderData();

  useEffect(() => {
    const findEvent = latestEvents.find((event) => event.id === id);
    setLatestEvent(findEvent);
  }, [id, latestEvents]);
  const { img, title, date, time_range, location, description } = latestEvent;
  return (
    <div>
      <Navbar></Navbar>
      <div className="card ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div>
            <p className="flex items-center">
              <MdCalendarMonth></MdCalendarMonth>
              <span className="ml-2">{date} </span>
            </p>
            <p className="flex items-center">
              <MdTimer></MdTimer>
              <span className="ml-2">{time_range} </span>
            </p>
            <p className="flex items-center">
              <MdLocationOn></MdLocationOn>
              <span className="ml-2">{location} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpCommingEvent;
