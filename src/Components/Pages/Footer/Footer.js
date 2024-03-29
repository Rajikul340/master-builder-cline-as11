import React from "react";
import useTitle from "../useTitle/useTitle";

const Footer = () => {
  useTitle("footer");
  return (
    <footer className="footer p-10 bg-[#3ABFF8]  text-base-content fixed-bottom">
      <div>
         <img className="w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZZZzCqZafzarGeELBCFL2IJQorehO7hT7dXGdjkM&s" alt="footer-img"/>
        <p className="text-lg font-bold">
        Master builder 
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
