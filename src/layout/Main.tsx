import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
