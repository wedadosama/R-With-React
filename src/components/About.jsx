import Button from "./Button";

function About() {
  return (
    <section id="About US">
      <div className="container flex items-center justify-around flex-wrap mt-14">
        <div className="About-text">
          <h2 className="text-5xl font-bold">
            About
            <br />
            Me
          </h2>
        </div>
        <div className="tite gap-3">
          <p className="text-base/6 mt-5 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin<br></br>
            tristique elit nec malesuada tincidunt. Pellentesque lobortis<br></br>
            metus quis ipsum mattis, vitae laoreet est posuere. Mauris<br></br>
            bibendum eros massa, sit amet tempor sem lobortis non.
          </p>
          <a className=" bg-[#212529] text-white rounded-lg mt-5 p-4 hover:bg-white hover:text-[#212529] inline-block" href="index.html">
            View CV
          </a>
          <Button/>
        </div>
      </div>
    </section>
  );
}
export default About;
