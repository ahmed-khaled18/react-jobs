import React from "react";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
function BrowseJobs({ isHome = false }) {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">{isHome ? "Recent Jobs" : "Browse Jobs"}</h2>
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BrowseJobs;
