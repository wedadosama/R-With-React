import Button from "../components/Button";
function Hero() {
  return (
    <section id="home" className="bg-[#dee2e6] py-16">
      <div className="container m-auto px-4 flex justify-center items-center gap-24 flex-wrap">
        <div>
          <h1 className="text-[40px] font-bold">
            Hello <br />
            I’m Ridho
          </h1>
          <p className="text-[#808080]">Freelancer Web Developer</p>
          <Button />
        </div>
        <div>
          <img src="/images/user.webp" alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
