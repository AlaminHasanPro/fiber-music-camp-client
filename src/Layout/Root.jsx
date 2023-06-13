import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
