import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m a results-driven Full-Stack Developer with a Post Graduate Diploma in Mobile Computing from CDAC Sunbeam Pune. My core expertise lies in Android and iOS app development, using Java, Kotlin, and React Native to build high-performance mobile applications. I also develop backend systems using Node.js, Express.js, MySQL, and integrate RESTful APIs to connect frontend apps with databases securely.  I follow software design principles like MVC architecture, Object-Oriented Programming (OOP), and use tools like GitHub, Postman, and Firebase for version control, API testing, and real-time features like push notifications. I’ve built and deployed full-stack projects such as RecycleX (waste management system with 3D visualization) and BookEasy (appointment booking app with real-time updates and secure login).  I enjoy solving problems, writing clean and maintainable code, and continuously learning new technologies to build user-friendly, scalable solutions. convert this one for portfolio make it little bit technological word 
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
