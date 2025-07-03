import Navbar from "@/components/Navbar/Navbar";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { Outlet } from "react-router";

const Main = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log(data?.data);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
