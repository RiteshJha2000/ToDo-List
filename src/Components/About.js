import React from "react";
import Profile from "../Components/img/profile.jpeg";
import insta from "./img/insta.jpg";
import lkdn from "./img/THE NEW LINKEDIN LOGO PNG 2022.png";
import "./About.css";

export default function About() {
  const submit = () => {
    alert("Your concern will be contacted by our Team at the earliest");
  };
  document.title = "About-ToDo List";

  return (
    <div>
      <div className="first background">
        <div className="container1">
          <div className="header">
            <h1>About Us</h1>
            <p>
              This is the ToDo webapp made with the use of HTML, CSS,JavaScript and ReactJS. With this website 
              you can store your day to day important work. You can add or remove data from your list with some
              easy and user frendily features.This website is very fun to use.
            </p>
            <div className="button">
              <button className="btn1">Subscribe</button>
            </div>
          </div>

          <div className="line"></div>

          <div className="developer">
            <h1>Developer</h1>
            <div className="info" >
              <img src={Profile} alt="Image not uploaded" id="pic" />
              
              <ul>
                <li>Ritesh Jha</li>
                <li>2nd Year</li>
                <li>JC Bose University of Science and Technology</li>
                <div className="secondimg">
                <a href="https://www.instagram.com/ritesh_jha_20/">
                  <img src={insta} id="insta" alt="unable to load" />
                </a>
                <a href="https://www.linkedin.com/in/ritesh-jha-217645200">
                  <img src={lkdn} id="insta" alt="unable to load" />
                </a>
              </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      

      <footer className="contact background1" id="contact">
        <h2 className="text-centre">Contact Us</h2>
        <div className="form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Number"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email id"
          />
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            placeholder="Elaborate Your Concern"
          ></textarea>
          <button className="btn-dark" onClick={submit}>
            Submit
          </button>
        </div>
      </footer>
    </div>
  );
}
