import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  const config = {
    link: "/Kathiresan-Resume-FrontendDeveloper.pdf",
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row px-5 bg-secondary"
    >
      <div className="md:w-1/2 py-5 flex md:justify-end justify-center">
        <img
          className="w-[300px] rounded-2xl"
          src={ResumeImg}
          alt="Resume preview"
        />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 mb-5 w-[135px] font-bold border-primary">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume{" "}
            <a
              href={config.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
