import "./App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import env from "react-dotenv";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequiredAuth from "./features/auth/RequiredAuth";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.get(`/api/contacts`, {
  //       headers: {
  //         "access-token": `supersecretkey`,
  //       },
  //     });
  //     setData(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public Route */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected route */}
        <Route element={<RequiredAuth />}>
          <Route path="welcome" element={<Welcome />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
