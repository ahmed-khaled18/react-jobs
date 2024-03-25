import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobSideBar from "../components/JobSideBar";
import JobPageHero from "../components/JobPageHero";

const JobPage = ({ deleteJob }) => {
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link to="/jobs" className="text-indigo-500 hover:text-indigo-600 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <JobPageHero job={job} />
            <JobSideBar job={job} deleteJob={deleteJob} />
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
