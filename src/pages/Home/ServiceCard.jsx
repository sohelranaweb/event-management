import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { id, name, image, short_description, price } = service;
  return (
    <div className="lg:px-0 px-3">
      <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[256px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description.slice(0, 70)}</p>
          <div className="card-actions justify-end items-center">
            <p>Price: {price}</p>
            <Link to={`/courseDetails/${id}`}>
              <button className="btn text-white btn-outline bg-[#03b97c]">
                Course Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
