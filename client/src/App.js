import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Techstack from "./pages/Techstack/Techstack";

import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";

import Login from "./pages/Signin/Login";
import Loader from "./components/Loader/Loader";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Project from "./components/Admin/Project";

import Projects from "./components/Projects/Projects";
import Techknow from "./components/Admin/Techknow";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  const [theme] = useTheme();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div id={theme}>
            <ToastContainer />
            <MobileNav />
            <Layout />
            <div className="container">
              <About about={user.about} />
              <Education timelines={user.timeline} />

              <Techstack techknow={user.techknow} />
              <Projects projects={user.projects} />

              <WorkExp workexperience={user.workexpriences} />
              <Contact element={<Contact />} />
              <Login />
              <Routes>
                {/* <Route path="/contact" element={<Contact />} /> */}

                {/* <Route
                  path="/projects"
                  element={<Projects projects={user.projects} />}
                /> */}
                <Route
                  path="/account"
                  element={isAuthenticated ? <AdminPanel /> : <Login />}
                />
                <Route
                  path="/admin/timeline"
                  element={isAuthenticated ? <Timeline /> : <Login />}
                />
                <Route
                  path="/admin/about"
                  element={isAuthenticated ? <About /> : <Login />}
                />
                <Route
                  path="/admin/techknow"
                  element={isAuthenticated ? <Techknow /> : <Login />}
                />
                
                <Route
                  path="/admin/workexperience"
                  element={isAuthenticated ? <WorkExp /> : <Login />}
                />
                <Route
                  path="/admin/project"
                  element={isAuthenticated ? <Project /> : <Login />}
                />
              </Routes>
            </div>
            <div className="footer pb-3 ms-3">
              <Tada>
                <h4 className="text-center">
                  Made With 😍 Abdul Rab &copy; 2023
                </h4>
              </Tada>
            </div>
          </div>
          <ScrollToTop
            smooth
            color="#f29f67"
            style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
          />
        </>
      )}
    </>
  );
}

export default App;
