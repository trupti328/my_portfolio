import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMysql, SiAndroid, SiKotlin, SiMongodb } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "JAVA EE",
    icon: DiJava,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "React.js",
    icon: FaReact,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Android Development",
    icon: SiAndroid,
  },
  {
    skill: "Kotlin",
    icon: SiKotlin,
  },
  {
    skill: "React Native",
    icon: FaReact,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto my-12">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <SingleSkill
              text={item.skill}
              imgSvg={<item.icon className="text-6xl text-orange" />}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
