import Heroimg from "../assets/hero.png";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Hero() {
  const config = {
    subtitles: ["Frontend Developer", "UI Developer", "Web Developer"],
    social: {
      instagram:
        "https://www.instagram.com/attitude_boy_kathir/profilecard/?igsh=cmdrZDVja2l2amY=",
      facebook: "https://www.facebook.com/share/1AdBFheWHF/?mibextid=qi2Omg",
      linkedin: "https://www.linkedin.com/in/kathiresan-l",
      github: "https://github.com/kathir-dev-2024",
    },
  };

  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex(
        (prevIndex) => (prevIndex + 1) % config.subtitles.length
      );
    }, 5000);

    return () => clearInterval(interval); //
  }, [config.subtitles.length]);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center"
    >
      <div className="md:w-1/2 flex flex-col text-center md:text-left">
        <h1 className="text-white text-6xl font-hero-font">
          Hi,
          <br />
          I'm <span className="text-black">Kathir</span>
        </h1>
        <p className="text-2xl py-4 text-gray-300">
          I'm a{" "}
          <span className="text-black font-bold">
            {config.subtitles[currentSubtitleIndex]}
          </span>
        </p>
        <div className="flex justify-center md:justify-start py-5">
          <a
            href={config.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5 hover:text-white"
          >
            <AiOutlineInstagram size={40} />
          </a>
          <a
            href={config.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5 hover:text-white"
          >
            <AiOutlineFacebook size={40} />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5 hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5 hover:text-white"
          >
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>
      <img src={Heroimg} alt="Hero" className="md:w-1/3" />
    </section>
  );
}
