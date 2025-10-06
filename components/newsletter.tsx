export const Newsletter = () => {
  return (
    <section className="section min-h-122.5 bg-newsletter">
      <div className="container flex justify-center lg:justify-end">
        <div className="w-full max-w-139.5 text-center lg:text-left text-white">
          <h2 className="mb-5 mx-auto lg:mx-0 max-w-87.5 text-4xl font-semibold leading-normal">
            Get more discount Off your order
          </h2>
          <p className="mb-10 text-xl font-light">Join our mailing list</p>
          <form className="flex flex-col lg:flex-row gap-5.5">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email address"
              className="h-15 w-full px-6 outline-none bg-white text-gray-600 placeholder:text-gray-400 rounded-lg lg:flex-1"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
