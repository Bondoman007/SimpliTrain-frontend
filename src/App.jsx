import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./store/counterSlice";
import Navbar from "./components/Navbar";
import EducationWorkExp from "./components/EducationWorkExp";
import PersonalInformation from "./components/PersonalInformation";
import ProfileSidebar from "./components/ProfileSidebar";
function App() {
  const dispatch = useDispatch();
  const countInfo = useSelector((store) => store.counter.value);

  return (
    <>
      <div>
        <Navbar />
        <EducationWorkExp />
        <PersonalInformation />
        <ProfileSidebar />
      </div>
    </>
  );
}

export default App;
