import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";

function openModal(e) {
  e.preventDefault();
  let subsModal = new Modal(document.getElementById("registmodal"));
  subsModal.show();
}

export default function Footer() {
  return (
    <footer className="container-fluid" id="contact-us">
      <div className="row">
        <div className="col-sm-5 col-lg-3 py-4">
          <Link to="{}" className="footer-logo">
            <img src={"images/footerlogo.png"} alt="logo" className="footer-logo" />
          </Link>
        </div>
        <div className="col-6 col-sm-7 col-lg-3 py-4">
          <h4>About Desh Ke Mentor</h4>
          <ul className="footer-links">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a className="disabled">Team</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1N_zvwn_DQqCU8qE-eLSBHtZwIedGmNKDfQlcqRLdk7s/edit?usp=sharing"
                className="footer-links"
              >
                FAQ
              </a>
            </li>
            <li>
              <a className="disabled">Contact us</a>
            </li>
            <li>
              <a className="disabled">Terms of Use</a>
            </li>
            <li>
              <a className="disabled">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-sm-6 col-lg-3 py-4">
          <h4>Get Involved</h4>
          <ul className="footer-links">
            <li>
              <a href="#" onClick={openModal} className="footer-links">
                Join as a Mentor
              </a>
            </li>
            <li>
              <a className="disabled">Join as a Mentee</a>
            </li>
            <li>
              <a
                href="https://forms.gle/K9oBwyiPcitmkMTC7"
                className="footer-links"
              >
                Give Suggestions
              </a>
            </li>
            <li>
              <a className="disabled">Join the team</a>
            </li>
            <li>
              <a className="disabled">Contribute</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-4">
          <h4>Join The Conversation</h4>
          <ul className="list-inline footer-social">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/Desh-Ke-Mentor-107174851688515/">
                <svg className="icon icon-4x">
                  <use href="#icon_facebook"></use>
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/DeshKeMentor?s=20">
                <svg className="icon icon-4x">
                  <use href="#icon_twitter"></use>
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com/deshkementor?utm_medium=copy_link">
                <svg className="icon icon-4x">
                  <use href="#icon_instagram"></use>
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://youtube.com/channel/UCW2QzzkkzohkKYhVFpsfiAw">
                <svg className="icon icon-4x">
                  <use href="#icon_youtube"></use>
                </svg>
              </a>
            </li>
          </ul>
          <h4>Info</h4>
          <ul className="footer-links">
            <li className="footer-links">
              <a className="footer-links disabled">Address</a> <br />
              <p className="footer-para">
                FW4FF9, 1st Floor<br />
                Mechanical Engineering Department
                Delhi Technological University<br />
                Bawana Road, Delhi-110042, India
              </p>
            </li>
            <li>
              <a className="footer-links disabled">Phone</a> <br />
              <p className="footer-para">
                +91 11 2729 8073<br />
                +91 93158 49885<br />
              </p>
            </li>
            <li>
              <a className="footer-links disabled">Email</a> <br />
              <p className="footer-para">
                contact@deshkementor.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row copyrights mt-4">
        <div className="col-sm-12 py-4">
          &copy; 2021 DKM | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
