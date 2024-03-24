import React from "react";

function Cards({ title, description, buttonText }) {
  return (
    <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <a href="/add-job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
        {buttonText}
      </a>
    </div>
  );
}

export default Cards;
