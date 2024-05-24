const Subscribe = () => {
  return (
    <section className=" bg-[#f06d48] min-h-[250px] p-2 py-6 flex justify-center items-center">
      <div className="max-w-[1500px] mx-auto w-full px-[50px]">
        <h2 className="font-bold text-3xl">Subscribe our Newsletter</h2>
        <div className="flex items-center md:flex-row flex-col justify-between">
          <p className="max-w-[70ch] text-white text-xl font-thin pr-4">
            Subscribe to our newsletter and be the first to hear about new watch
            releases, styling tips, and special promotions.
          </p>
          <div className="sm:mt-0 mt-3">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
              className="px-2 py-1.5 bg-transparent text-white placeholder:text-white sm:border-b border-white sm:w-fit w-full"
            />
            <button className="bg-black text-white px-3 py-1.5 sm:w-fit w-full">
              Subscribe Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
