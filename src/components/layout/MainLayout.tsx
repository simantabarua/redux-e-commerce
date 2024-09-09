import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const MainLayout = () => {
  return (
    <>
      <main className="max-w-[1920px] mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
