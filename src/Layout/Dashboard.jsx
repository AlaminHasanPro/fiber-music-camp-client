import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";


const Dashboard = () => {
  
  return (
    <main className="grid grid-cols-dashboard-md ">
      <Sidebar />
      <main className="h-full md:absolute left-dashboard-md md:w-dashboard-body">
        <div className="w-full px-3  mx-auto ">
          <Outlet />
        </div>
        
      </main>
    </main>
  );
};

export default Dashboard;
