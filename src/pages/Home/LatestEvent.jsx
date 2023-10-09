import { MdCalendarMonth, MdLocationOn, MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LatestEvent = ({ event }) => {
  const { id, img, title, date, time_range, location, description } = event;
  return (
    <div className="card card-compact lg:w-96 w-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description.length > 100 ? (
          <p>
            {description.slice(0, 70)}{" "}
            <Link
              to={`/latestEvent/${id}`}
              className="text-[#03b97c] font-bold text-xl"
            >
              Know More...
            </Link>
          </p>
        ) : (
          <p>{description}</p>
        )}
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
  );
};
LatestEvent.propTypes = {
  event: PropTypes.object,
};
export default LatestEvent;
