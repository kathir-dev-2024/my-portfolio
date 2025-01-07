import AboutImg from "../assets/about.png";
export default function About() {
  const config = {
    line1:
      "Hi, My name is Kathiresan. I am a Frontend web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap",
    line2:
      "I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.",
  };
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row px-5 bg-secondary "
    >
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white ">
          <h1 className="text-4xl  border-b-4 mb-5 w-[170px] font-bold border-primary">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
        </div>
      </div>
    </section>
  );
}
