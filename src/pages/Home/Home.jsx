import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import LatestEvent from "./LatestEvent";
import StudentsReviews from "./StudentsReviews";
import Footer from "./Footer";

const Home = () => {
  const [latestEvent, setLatestEvent] = useState([]);
  useEffect(() => {
    fetch("latestEvent.json")
      .then((res) => res.json())
      .then((data) => setLatestEvent(data));
  }, []);
  const services = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <h1 className="text-3xl text-center my-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-24 mb-8">
        <h1 className="text-center">Latest News and Events</h1>
        <p className="text-center">
          Stay updated with the latest education news and events, empowering
          lifelong <br /> learning and educational advancements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {latestEvent.map((event) => (
          <LatestEvent key={event.id} event={event}></LatestEvent>
        ))}
      </div>
      <div className="mt-24 mb-8">
        <h1 className="text-center">Our Students Reviews</h1>
        <p className="text-center">
          Stay updated with the latest education news and events, empowering
          lifelong <br /> learning and educational advancements.
        </p>
      </div>
      <StudentsReviews></StudentsReviews>
      <Footer></Footer>

      {/* https://demoapus1.com/skillup/ */}
    </div>
  );
};

export default Home;
