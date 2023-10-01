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
              <img src="../public/colorof his.jpg" />
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
              <img src="../public/fishing in theair.jpeg" />
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
