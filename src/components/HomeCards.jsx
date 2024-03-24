import React from "react";
import Cards from "./Cards";

function HomeCards() {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Cards title="For Developers" description="Browse our React jobs and start your career today" buttonText="Browse Jobs" />
          <Cards title="For Employers" description="List your job to find the perfect developer for the role" buttonText="Add Jobs" />
        </div>
      </div>
    </section>
  );
}

export default HomeCards;
