import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import BrowseJobs from "./components/BrowseJobs";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <BrowseJobs />
      <ViewAllJobs />
    </>
  );
}

export default App;
