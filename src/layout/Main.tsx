import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const Main = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Suspense fallback={<Loader />}>
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <Toaster />
        </Suspense>
      </div>
    </>
  );
};

export default Main;
