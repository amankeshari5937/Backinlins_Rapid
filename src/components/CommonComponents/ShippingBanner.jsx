const ShippingBanner = () => {
  return (
    <div
      className="relative w-full  flex   text-white   px-6 md:px-12"
      style={{
        backgroundImage: `url(
          "https://rapidautoshipping.com/assets/images/car-key-new1.jpeg"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative flex flex-col justify-start items-start z-10  my-20">
        <h1 className="text-5xl   font-bold  " style={{ lineHeight: "1.4" }}>
          Want to Start Shipping With
          <br /> The Best?
        </h1>
        <p className="mt-4 text-xl">
          If you would prefer to speak to one of our experienced <br />{" "}
          Transport Specialists, feel free to give us a call at
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-rapidcolor text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-rapidcolor-light">
            +1 (833) 233-4447
          </button>
          <button className="bg-rapidcolor text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-rapidcolor-light">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingBanner;
