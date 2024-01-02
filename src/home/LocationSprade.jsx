import React from "react";
import { Link } from "react-router-dom";

const title = "More Then 60,000 Customers";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const LocationSprade = () => {
  return <div className="clients-section style-2 padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>

            {/* main content */}
            <div className="section-wrapper">
                <div className="clients">
                    {
                        clientsList.map((value,index) => (
                            <div key={index} className="client-list">
                                <Link to="/sign-up" className="client-content">
                                    <span>{value.text}</span>
                                </Link>
                                <div className="client-thumb">
                                    <img src={value.imgUrl} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
  </div>;
};

export default LocationSprade;
