import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGoodreads } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div> */}
      <div className="m-8 flex items-center justify-center gap-8 text-2xl">
        <a href="https://www.linkedin.com/in/mursalin-habib" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin /></a>
          <a
          href="https://github.com/mursalin-habib"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.discordapp.com/users/mursalin.h"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-discord"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.goodreads.com/mursalin_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#75420e]"
        >
          <FaGoodreads />
        </a>
        <a
          
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          <FaInstagram />
        </a>
        <a
          
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaSquareXTwitter />
          </a>
      </div>
    </nav>
  )
}

export default Navbar
