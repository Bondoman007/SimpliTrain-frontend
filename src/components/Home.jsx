import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div children className="">
      <h1 className="font-bold">Home Page</h1>
      <button className="p-2 bg-green-400" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default Home;
