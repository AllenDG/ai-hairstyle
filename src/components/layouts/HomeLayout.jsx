import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar/navbar";
import FooterLayout from "./FooterLayout";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl p-5">
        {/* Adds margin-left and margin-right */}
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
}
