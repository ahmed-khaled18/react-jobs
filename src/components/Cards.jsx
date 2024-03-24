import React from "react";
import { Link } from "react-router-dom";

function Cards({ title, description, buttonText, link }) {
  return (
    <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link to={link} className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
        {buttonText}
      </Link>
    </div>
  );
}

export default Cards;
