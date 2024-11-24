import todoappimg from "../assets/Todo-app.png"
import websiteimg2 from "../assets/food-ecommerce.jpg";
import blogimg from "../assets/BS-blog-page.png"

export default function Projects() {
  const config = {
    projects: [
      {
        image: todoappimg,
        description:
          "A To-Do List Application built using ReactJS, HTML, and CSS. It allows users to add, delete, and manage tasks efficiently with a user-friendly interface",
        link: "https://react-todolistapp-project.netlify.app/",
      },
      {
        image: websiteimg2,
        description:
          "Food E-commerce website similar to Swiggy, built with Angular & .NET.",
        link: "https://example-foodecommerce.com",
      },
      {
        image: blogimg,
        description:
          "A Simple Blog Website built using HTML, CSS, and Bootstrap. It features a responsive design for displaying blog posts elegantly.",
        link: "https://simple-blog-page-using-bootstrap.netlify.app/",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-20 bg-primary px-5 justify-center text-white"
    >

      <div className="w-full text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-secondary inline-block mb-5">
          Projects
        </h1>
        <p className="text-lg">
          Here are some of my best projects showcasing my skills with React,
          HTML, CSS, JavaScript, and more. Check them out!
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {config.projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:scale-105 transform transition-transform duration-300"
          >
           
            <img
              className="h-60 w-full object-cover"
              src={project.image}
              alt={`Project ${index + 1}`}
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <p className="text-center px-4 text-sm md:text-base">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-secondary text-primary py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
