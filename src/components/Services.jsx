function Services() {
  return (
    <>
      <section id="services" className="text-center mb-6">
        <div className="container m-auto">
          <div className="service">
            <h2 className="mb-5 text-5xl font-bold">services</h2>
            <p className="col my-5 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
              tristique elit nec malesuada tincidunt. Pellentesque lobortis Web Development
            </p>
          </div>
          <div className="cards cards flex flex-wrap justify-center items-center gap-4">
            <div className="card card w-64 p-5 mt-12 rounded-lg text-white bg-gray-800">
              <img src="icons/web-development.webp" alt="development" className="mb-5" />
              <h2 className="mb-5 text-xl font-bold">Web Development</h2>
              <p className="my-5 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec</p>
            </div>
            <div className="card card w-64 p-5 mt-12 rounded-lg text-white bg-gray-800">
              <img src="icons/web-design.webp" alt="desgin"className="mb-5" />
              <h2 className="mb-5 text-xl font-bold">Web Design</h2>
              <p className="my-5 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec</p>
            </div>
            <div className="card card w-64 p-5 mt-12 rounded-lg text-white bg-gray-800">
              <img src="icons/mobile.webp" alt="mobile" className="mb-5" />
              <h2 className="mb-5 text-xl font-bold">APP Design</h2>
              <p className="my-5 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
