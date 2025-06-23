import SingleSkill from "./SingleSkill";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiAndroid, SiKotlin } from "react-icons/si";

import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },

  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Java EE",
    icon: DiJava,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Android",
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
    skill: "GitHub",
    icon: FaGithub,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          key={index}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon className="text-6xl text-orange focus:outline-none focus:ring-0" />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
