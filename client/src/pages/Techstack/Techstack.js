import React from "react";
import "./Techstack.css";
import { Button, Typography } from "@mui/material";

import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { useDispatch } from "react-redux";
import { FaRegSmileWink } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { deleteTechknow, getUser } from "../../actions/user";
import { Delete } from "@mui/icons-material";

export const TechstackCard = ({ name, url, isAdmin = false, id }) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteTechknow(id));
    dispatch(getUser());
  };
  return (
    <>
      <div className="container techstack" id="techstack">
        <div className="row">
          <Fade left>
            <div className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center"></div>
                      <div className="media-body">
                        <h5>{name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Techstack = ({ techknow }) => {
  return (
    <div className="container techstack" id="techstack">
      <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming Languages, frameworks, databses, front-end
          and back-end tools, and APIs
        </p>
      </RubberBand>
      <div className="row">
        <div className="cards">
          {techknow &&
            techknow.map((item) => (
              <TechstackCard
                id={item._id}
                key={item._id}
                url={item.url}
                name={item.name}
              />
            ))}
        </div>
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Techstack;
