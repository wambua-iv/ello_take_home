import React from "react";

export const Nav: React.FC = () => {
  return (
    <div className="landing_nav">
      <p>Our Products</p>
      <p>About Us</p>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="landing_hero">
      <div className="landing_hero_main_text">
        Building a 1:1 teacher was one of the original dreams of AI.
      </div>
      <div className="landing_hero_secondary_text">
        It&#39;s finally possible.
      </div>
    </div>
  );
};

const ElloSvg = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8190_25299)">
        <path
          d="M48.9544 20.1356C51.7433 15.3218 55.5638 14.5195 57.8943 14.9397C60.9507 15.4364 62.6317 22.4279 62.8991 26.0955C63.1666 29.7632 63.2812 42.409 58.0853 45.2743C57.2924 45.7192 56.4701 45.8898 55.6481 45.8657"
          stroke="currentcolor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.2321 42.6377C12.0878 52.3035 9.64269 65.3313 10.4068 70.9474C11.3619 78.1681 23.702 80.1548 23.702 72.7813C23.702 67.4145 24.2697 61.9126 25.7461 57.3442"
          stroke="currentcolor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M50.0245 48.1016C50.865 53.4884 53.8449 59.6394 57.2451 65.0263C59.4663 68.5214 56.8561 71.5975 53.3064 72.655"
          stroke="currentcolor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.7207 23.5357C18.9997 14.3283 26.3732 10.6225 32.6388 10.0494C46.0487 9.20889 52.1996 19.295 53.8042 24.9875C55.4088 30.68 53.575 38.512 51.7794 43.5932C49.9837 47.9103 48.914 51.1195 48.4173 53.1444C46.5835 62.0079 47.233 66.7835 48.2645 70.6422C49.7163 75.9527 51.6266 77.137 54.9886 75.9526C56.0583 75.5706 57.4719 76.946 57.3955 78.7416C57.3191 79.8495 56.9752 80.9193 55.9819 81.3777C54.9886 81.798 48.8758 84.778 44.2912 79.0472C39.7449 73.3165 38.1785 64.2238 37.5672 62.0079C36.9559 59.792 35.3513 56.239 30.8813 54.4815C28.1826 53.4146 24.324 51.4713 20.9992 48.7575"
          stroke="currentcolor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.9531 26.8214C18.6924 22.0458 14.1842 18.3781 10.593 17.0027C6.9635 15.6656 4.74762 16.6589 3.33405 19.1422C1.92047 21.6255 -0.066172 29.8778 1.69125 37.0985C3.44867 44.3192 6.23762 46.7643 9.90527 46.8407C13.5729 46.9171 17.126 44.854 19.3036 42.4089"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_8190_25299">
          <rect width="64" height="64" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

const Bounce = () => {
  return (
    <svg
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          style={{fill:'#28b8b8'}}
          d="M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256 C512,114.608,397.392,0,256,0z"
        ></path>{" "}
        <g style={{opacity:0.2}}>
          {" "}
          <path d="M135.52,163.056l136.4,87.488l136.4-87.472L271.92,447.36L135.52,163.056z"></path>{" "}
        </g>{" "}
        <path
          style={{fill:'#28b8b8FFFFFF'}}
          d="M119.52,147.056l136.4,87.488l136.4-87.472L255.92,431.36L119.52,147.056z"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const LandingButton = () => {
  return (
    <div className="landing_button">
      <div className="landing_button_content">
        <ElloSvg />
        <p>Explore learning with Ello</p>
        <div className="landing_button_arrow">
        <Bounce  />
        </div>
      </div>
    </div>
  );
};
