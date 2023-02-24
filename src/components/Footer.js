import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";
import { GiPeaceDove } from "react-icons/gi";

export const Footer = () => {
  return (
    <footer className="flex flex-col p-2 bg-white shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
      <ul className="flex flex-wrap w-1/6 p-3 justify-evenly items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://github.com/lruiz5" target="_blank" rel="noreferrer">
            <SiGithub className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/lruiz5"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a href="mailto:l.ruiz5@live.com" target="_blank" rel="noreferrer">
            <BsMailbox className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a href="https://luisruiz.me" target="_blank" rel="noreferrer">
            <GiPeaceDove className="w-7 h-7" />
          </a>
        </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="/" className="hover:underline">
          Cinema Warehouse
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
