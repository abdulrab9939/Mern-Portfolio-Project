import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addAbout, getUser } from "../../actions/user";
import { AboutCard } from "../../pages/About/About";

const About = () => {
     const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();
    const [url, setUrl] = useState("");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
    const [subtitle,setSubtitle ] = useState("");
  const [description, setDescription] = useState("");
    const [quote,setQuote ] = useState("");

  const [avatar, setAvatar] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addAbout(url,name,title,subtitle,description,quote,avatar));
    dispatch(getUser());
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
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
            placeholder="Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Link"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Technologies"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="adminPanelInputs"
          />
           <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.about &&
            user.about.map((item) => (
              <AboutCard
                id={item._id}
                key={item._id}
                                url={item.url}

                abname={item.name}
                 aboutTitle={item.title}
                aboutsubtitle={item.subtitle}

                description={item.description}
                aboutquote={item.quote}

                aboutavatar={item.image.url}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default About
