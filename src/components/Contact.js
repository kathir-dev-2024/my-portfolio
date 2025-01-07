import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const config = {
    email: "kathiresankathir947@gmail.com",
    whatsappLink: `https://wa.me/919080420529?text=Hi%20Kathiresan,%20I%20would%20like%20to%20connect!`,
    location: "Salem, Tamil Nadu, India",
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row px-6 py-20 bg-primary text-white justify-center items-center gap-10"
    >
      
      <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold border-b-4 border-secondary mb-6">
          Contact Me
        </h1>
        <p className="text-lg mb-6">
          Feel free to reach out to discuss projects, collaborations, or just to
          say hi!
        </p>
        <div className="space-y-6">
          
          <p className="flex items-center text-lg">
            <FaLocationDot
              className="text-secondary mr-2"
              aria-label="Location icon"
            />
            <span className="font-semibold">Location:</span> {config.location}
          </p>

          
          <p className="flex items-center text-lg">
            <MdEmail className="text-secondary mr-2" aria-label="Email icon" />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${config.email}`}
              className="text-secondary hover:underline transition-colors duration-200"
            >
              {config.email}
            </a>
          </p>

          
          <p className="flex items-center text-lg">
            <FaWhatsapp
              className="text-secondary mr-2"
              aria-label="WhatsApp icon"
            />
            <span className="font-semibold">WhatsApp:</span>{" "}
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline transition-colors duration-200"
            >
              Message on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
