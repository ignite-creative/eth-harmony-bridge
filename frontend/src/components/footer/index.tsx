import React from "react";
import "./index.css";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer-container">
      <div className="max-w-7">
        <p className="text-center md:text-left text-base text-gray-400">
          &copy; 2022 Created by YouLei for
          <a className="hover:underline" href="https://github.com/prodevcn">Author</a>
        </p>
        <p className="text-center md:text-left text-base text-gray-400">
          Visit
          <a className="hover:underline" href="https://github.com/prodevcn">YouLei</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;