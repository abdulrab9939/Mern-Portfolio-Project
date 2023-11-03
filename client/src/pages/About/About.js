import React from "react";
import { Typography } from "@mui/material";
import Jump from "react-reveal/Jump";

import "./About.css";
export const AboutCard = ({
  url,
  abname,
  aboutTitle,
  description,
  aboutquote,
  aboutavatar,

  isAdmin = false,
  id,
}) => {
  // const dispatch = useDispatch();

  // const deleteHandler = async (id) => {
  //   await dispatch(deleteProject(id));
  //   dispatch(getUser());
  // };

  return (
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={aboutavatar} alt="profile_pic" />
            <Typography
              variant="h5"
              style={{ margin: "1vmax 0", color: "black", textAlign: "center" }}
            >
              {aboutTitle}
            </Typography>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <div className="ov">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Jump>
  );
};

const About = ({ about }) => {
  return (
    <>
      {about &&
        about.map((item) => (
          <AboutCard
            id={item._id}
            key={item._id}
            abname={item.name}
            aboutTitle={item.title}
            aboutsubtitle={item.subtitle}
            description={item.description}
            aboutquote={item.quote}
            aboutavatar={item.avatar.url}
            isAdmin={true}
          />
        ))}
    </>
  );
};

export default About;
