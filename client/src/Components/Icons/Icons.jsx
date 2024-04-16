import React from "react";
import {FaFacebookSquare,FaInstagramSquare,FaGithubSquare,FaLinkedin} from 'react-icons/fa'
import "./icons.css"
const Icons = () => {
  return (
    <>
      <div className="social text-center">
        <h5 className="text-green fs-2-5">Social Media</h5>
        <ul className="mt-2 fs-1-5 d-flex space-around">
          <li>
            <a href="https://github.com/arcdigitalmain">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61554995077542&mibextid=ZbWKwL">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/arcmain1/">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/arc-digitalmarketing/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Icons;
