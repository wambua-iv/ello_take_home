import React from "react";
import { Hero, LandingButton, Nav } from "./LandingComponents";

const Landing: React.FC = () => {
  return (
    <>
      <div className="landing">
        <Nav />
        <Hero />
        <LandingButton />
        <div className="books">
          <div className="books_book">
            <div className="books_img">
            <a href="/book/0/ColorOfHisOwn">
              <img src="https://imgs.search.brave.com/peTi0--3sl-Wj_E68Lzo_VP7tBU8rpvJC3y8V04WZOk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFzWTZ5VEk2Skwu/anBn" />
              </a>
            </div>
            <div className="books_title">
              <a href="/book/0/ColorOfHisOwn">A Color of His Own</a>
              <p>Leo Lionni</p>
            </div>
          </div>
          <div className="books_book">
            <div className="books_img">
                <a href="/book/1/fishingintheair">
              <img src="https://imgs.search.brave.com/7zHQX0LI1H1tzGjNqXcwqv4e6TVCUa3GKu6Z0BdcEBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGlzaGVyc3dl/ZWtseS5jb20vY292/ZXIvOTc4MDA2MDI4/MTExMw" />
              </a>
            </div>
            <div className="books_title">
              <a href="/book/1/fishingintheair">Fishing in the Air</a>
              <p>Sharon Creech</p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Landing;
