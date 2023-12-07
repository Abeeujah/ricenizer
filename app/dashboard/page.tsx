import React from "react";
import CardWithLink from "./_components/DashboardCard";
import DashboardComponent from './_components/Dashboard'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardWithLink />
        <CardWithLink />
        <CardWithLink />
      </div>
      <div className="my-4">
          <DashboardComponent />
      </div>
    </div>
  );
};

export default Dashboard;
