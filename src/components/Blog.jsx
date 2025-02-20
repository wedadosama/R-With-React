function Blog() {
  return (
    <>
      <section className="blog mb-4">
        <div className="container m-auto">
          <h2 className="text-center text-6xl font-bold">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 max-w-5xl mx-auto">
            <div className="flex rounded-lg bg-gray-200 overflow-hidden">
              <div className="w-1/3 bg-gray-400">
                <img className="w-full h-full object-cover" src="/images/javascript.webp" alt="HTML" />
              </div>
              <div className="p-6 w-2/3">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn HTML</h3>
                <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
              </div>
            </div>
            <div className="flex rounded-lg bg-gray-200 overflow-hidden">
              <div className="w-1/3 bg-gray-400">
                <img className="w-full h-full object-cover" src="/images/paython.webp" alt="CSS" />
              </div>
              <div className="p-6 w-2/3">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn CSS</h3>
                <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
              </div>
            </div>
            <div className="flex rounded-lg bg-gray-200 overflow-hidden">
              <div className="w-1/3 bg-gray-400">
                <img className="w-full h-full object-cover" src="/images/rust.webp" alt="C" />
              </div>
              <div className="p-6 w-2/3">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn C</h3>
                <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
              </div>
            </div>
            <div className="flex rounded-lg bg-gray-200 overflow-hidden">
              <div className="w-1/3 bg-gray-400">
                <img className="w-full h-full object-cover" src="/images/ui-path.webp" alt="GO" />
              </div>
              <div className="p-6 w-2/3">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">Learn GO</h3>
                <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
