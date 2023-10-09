const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/2721hZq/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-medium">
            Empower Minds: Your Path to Educational Excellence
          </h1>
          <p className="mb-5">
            Welcome to a world where knowledge knows no bounds! Our mission at
            Empower Minds is to inspire, educate, and empower individuals of all
            ages on their journey toward educational excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
