import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "RecycleXw",
    Duration:"1Month",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://github.com/trupti328/recycleX",
  },
  {
    name: "BookEasy",
    Duration:"1Month",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://github.com/trupti328/BookEasy",
  },
  {
    name: "Movie App",
    Duration:"1Month",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://github.com/trupti328/movieApp",
  },
   {
    name: "Student Management System",
    Duration: "1Months",
    align: "left",
    image: "../../public/images/website-img-4.jpg", // Make sure this image exists in your project
    link: "https://github.com/trupti328/student_management", // Replace with actual GitHub link
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.Duration}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
