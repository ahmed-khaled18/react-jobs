import React from "react";
import { Link } from "react-router-dom";
function JobSideBar({ job }) {
  return (
    <aside>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Company Info</h3>

        <h2 className="text-2xl">{job.company.name}</h2>

        <p className="my-2">{job.company.description}</p>

        <hr className="my-4" />

        <h3 className="text-xl">Contact Email:</h3>

        <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactEmail}</p>

        <h3 className="text-xl">Contact Phone:</h3>

        <p className="my-2 bg-indigo-100 p-2 font-bold"> {job.company.contactPhone}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <Link
          to={`/edit-job/${job.id}`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Edit Job
        </Link>
        <button
          onClick={() => onDeleteClick(job.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Delete Job
        </button>
      </div>
    </aside>
  );
}

export default JobSideBar;
