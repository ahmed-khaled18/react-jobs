import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import BrowseJobs from "../components/BrowseJobs";
import ViewAllJobs from "../components/ViewAllJobs";
function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <BrowseJobs isHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
