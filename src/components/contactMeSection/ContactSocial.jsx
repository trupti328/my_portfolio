import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/truptidhone/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/trupti328" Icon={FiGithub} />
      <SingleContactSocial link="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdLmXrXwBqgzprqHFPSMNXrvJNchcSMftqsvKQQNBdFwddkThmDpZTmVpqHHkjgRpRjDQ" Icon={MdEmail} />
    </div>
  );
};

export default ContactSocial;
