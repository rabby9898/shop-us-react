import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <div className="px-5 md:px-10 lg:px-44">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
