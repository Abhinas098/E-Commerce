import React from "react";
import { Button } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="header">
        <h1>The Generics</h1>
        <h1 className="texts">Get Our Latest Album</h1>
        <div>
          <AiFillPlayCircle className="playIcon" />
        </div>
      </section>
      <h1 className="Tours">Tour</h1>
      <section className="lists">
        <div>
          <div className="list">
            <span className="date">JUL16</span>
            <span className="name">DETROIT, MI</span>
            <span className="discription">DTE ENERGY MUSIC THEATRE</span>
            <span>
              <Button>BUY TICKETS</Button>
            </span>
          </div>

          <div className="list">
            <span className="date">JUL90</span>
            <span className="name">TORONTO,ON</span>
            <span className="discription">BUDWEISER STAGE</span>
            <span>
              <Button>BUY TICKETS</Button>
            </span>
          </div>

          <div className="list">
            <span className="date">JUL22</span>
            <span className="name">BRISTOW, VA</span>
            <span className="description">JIGGY LUBE LIVE</span>
            <span>
              <Button>BUY TICKETS</Button>
            </span>
          </div>
          <div className="list">
            <span className="date"> JUL29</span>
            <span className="name">PHOENIX, AZ</span>
            <span className="discription">AK-CHIN PAVILION</span>
            <span>
              <Button>BUY TICKETS</Button>
            </span>
          </div>
          <div className="list">
            <span className="date">AUG 2</span>
            <span className="name">LAS VEGAS, NV</span>
            <span className="discription">T-MOBILE ARENA</span>
            <span>
              <Button>BUY TICKETS</Button>
            </span>
          </div>
          <div className="list">
            <span className="date">AUG 7</span>
            <span className="name">CONCORD, CA</span>
            <span className="discription">CONCORD PAVILION</span>
            <span>
              <Button>BUY TICKETS</Button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
