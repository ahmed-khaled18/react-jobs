import React from "react";
import { FaMapMarker } from "react-icons/fa";

function JobPageHero({ job }) {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{job.type}</div>
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="text-orange-700 mr-1" />
          <p className="text-orange-700">{job.location}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-indigo-800 text-lg font-bold mb-6">Job Description</h3>

        <p className="mb-4">{job.description}</p>

        <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

        <p className="mb-4">{job.salary} / Year</p>
      </div>
    </main>
  );
}

export default JobPageHero;
