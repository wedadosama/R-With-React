function Contact() {
  return (
    <>
      <section id="contact" className="py-16 bg-[#dee2e6]">
        <div class="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold">Contact</h2>
          <div class="flex justify-center flex-wrap gap-10 mt-6">
            <form>
              <h3 className="mb-5 font-bold">Send Me Message</h3>
              <input type="email" name="email" placeholder="Email" required className="inline-block p-3 mb-3 mr-2 border-none outline-none rounded-lg bg-[#212529]" />
              <input type="text" name="name" placeholder="Name" className="inline-block p-3 mb-3 border-none outline-none rounded-lg bg-[#212529] " />
              <textarea name="message" placeholder="Message" className="w-full p-4 h-32 bg-[#212529] text-white rounded-md resize-none mb-4"></textarea>
              <input type="submit"  className="block px-6 py-3 mt-4 ml-auto border-none outline-none rounded-lg text-black bg-white" />
            </form>
            <div class="social">
              <h3 className="mb-5 font-bold">Social Media</h3>
              <ul>
                <li>
                  <a className="flex items-center gap-4 py-2 hover:text-gray-400" href="index.html">
                    <img src="icons/whatsapp.png" alt="Whatsapp " /> 01567894369
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 py-2 hover:text-gray-400" href="index.html">
                    <img src="icons/instagram.png" alt="Instagram " /> satriawan.ridoh
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 py-2 hover:text-gray-400" href="index.html">
                    <img src="icons/facebook.png" alt="Facebook " />
                    Ridoh Satriawan
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 py-2 hover:text-gray-400" href="index.html">
                    <img src="icons/linkedin.png" alt="linkedin " />
                    Ridoh Satriawan
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 py-2 hover:text-gray-400" href="index.html">
                    <img src="icons/github.webp" alt="github " />
                    Ridoh Satriawan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
