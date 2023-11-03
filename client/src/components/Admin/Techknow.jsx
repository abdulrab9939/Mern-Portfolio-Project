import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectCard } from "../Projects/Projects";
import { addtechknow,deleteTechknow } from "../../actions/user";
import { TechstackCard } from "../../pages/Techstack/Techstack";
import { FaTrash } from "react-icons/fa";

const Techknow = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addtechknow( url, name));
    dispatch(getUser());
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
       
      }
    };
  };

    const deleteHandler = async (id) => {
    await dispatch(deleteTechknow(id));
    dispatch(getUser());
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      alert.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
         
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adminPanelInputs"
          />

         
        

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading} >
            Add
          </Button>
        </form>

        {/* <div className="adminPanelYoutubeVideos">
          {user &&
            user.techknow &&
            user.techknow.map((item) => (
              <TechstackCard
                id={item._id}
                key={item._id}
                url={item.url}
                name={item.name}
                isAdmin={true}
                
                
              />
              


              

           
            ))}
        </div>
    
              
      </div> */}

       <div className="adminPanelYoutubeVideos">
          {user &&
            user.techknow &&
            user.techknow.map((item) => (
              <div className="youtubeCard">
                <TechstackCard
                id={item._id}
                key={item._id}
                url={item.url}
                name={item.name}
                isAdmin={true}
                
                
              />
                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                 
                </Button>
              </div>
            ))}
        </div>

    </div>
    </div>
  );
};

export default Techknow;