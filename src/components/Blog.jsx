function Blog() {
  return (
    <>
      <section className="blog mb-4">
        <div className="container m-auto">
          <h2 className="text-center text-6xl font-bold">Blog</h2>
          <div className="title flex flex-wrap justify-center gap-20 mt-8 ">
            <div className="text flex justify-center w-96 rounded-lg bg-gray-200 ">
              <div className="image w-full h-full bg-gray-400"><img className="w-full h-full" src="/images/javascript.webp" alt="" /></div>
              <div className="course-taxt p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn HTML</h3>
                <p className="text-lg text-gray-800">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin <br /> tristique elit nec.lorem ipsum
                </p>
              </div>
            </div>
            <div className="text flex justify-center w-96 rounded-lg bg-gray-200">
              <div className="image w-full h-full bg-gray-400"><img className="w-full h-full" src="/images/paython.webp" alt="" /></div>
              <div className="course-taxt p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn CSS</h3>
                <p className="text-lg text-gray-800">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin <br /> tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
            <div className="text flex justify-center w-96 rounded-lg bg-gray-200">
              <div className="image w-full h-full bg-gray-400"><img className="w-full h-full" src="/images/rust.webp" alt="" /></div>
              <div className="course-taxt p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn C</h3>
                <p className="text-lg text-gray-800">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin <br /> tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
            <div className="text flex justify-center w-96 rounded-lg bg-gray-200">
              <div className="image w-full h-full bg-gray-400"><img className="w-full h-full" src="images/ui-path.webp" alt="" /></div>
              <div className="course-taxt p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn GO</h3>
                <p className="text-lg text-gray-800">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin <br /> tristique elit nec. lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
