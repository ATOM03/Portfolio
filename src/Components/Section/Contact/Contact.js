import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="social-media">
        <a href="https://www.facebook.com/priyanshu.jhaginiqa/" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/priyanshu__jhaginia/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/priyanshu-jhaginia-402583160"
          target="_blank"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/ATOM03" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div className="details">
        <h4>PRIYANSHU JHAGINIA</h4>
        <p>© Priyanshu Jhaginia. All rights reserved.</p>
        <p>January 2022</p>
      </div>
    </div>
  );
};
export default Contact;
