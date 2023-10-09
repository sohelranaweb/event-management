import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" mt-24">
      <h1 className="text-3xl text-red-500 text-center">
        Something went wrong!! 404
      </h1>
      <p className="text-center text-xl">
        Go Back{" "}
        <Link to="/" className="text-2xl text-[#03b97c] font-semibold">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
