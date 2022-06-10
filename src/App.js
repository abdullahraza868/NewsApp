import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NewsComponents from "./components/NewsComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <NavBar />
        <LoadingBar height={4} color="#f11946" progress={progress} />

        <Routes>
          <Route
            path="/"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="general"
                pageSize={9}
                country={"us"}
                category={"general"}
              />
            }
          ></Route>
          {/*<Route path="/buisness" element = {<NewsComponents setProgress = {setProgress} key= "buisness" pageSize= {9} country= {"us"} category = {"buisness"}/>}></Route>*/}
          <Route
            path="/entertainment"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="entertainment"
                pageSize={9}
                country={"us"}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="general"
                pageSize={9}
                country={"us"}
                category={"general"}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="health"
                pageSize={9}
                country={"us"}
                category={"health"}
              />
            }
          ></Route>
          <Route
            path="/sport"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="sport"
                pageSize={9}
                country={"us"}
                category={"sport"}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="science"
                pageSize={9}
                country={"us"}
                category={"science"}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <NewsComponents
                setProgress={setProgress}
                key="technology"
                pageSize={9}
                country={"us"}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
