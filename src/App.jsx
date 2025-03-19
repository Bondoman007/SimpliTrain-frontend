import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import EducationWorkExp from "./components/EducationWorkExp";
import PersonalInformation from "./components/PersonalInformation";
import ProfileSidebar from "./components/ProfileSidebar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <div className="flex flex-row justify-center mt-3 px-4">
        {/* Sidebar should not stretch too much */}

        <ProfileSidebar />

        {/* Main content with equal spacing */}
        <div className="flex flex-row gap-6 ">
          <PersonalInformation />

          {/* <div className="flex-1">
            <EducationWorkExp />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
