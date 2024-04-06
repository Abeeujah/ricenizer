import { Metadata } from "next";
import DashboardComponent from "./_components/Dashboard";
import CardWithLink from "./_components/DashboardCard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Monitor your activity.",
};

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
