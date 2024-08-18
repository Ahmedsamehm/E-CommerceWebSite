import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
export default function Layout() {
  return (
    <>
        <div className="app">
        <NavBar />
        <div id="MainLayout" className="container mx-auto">
          <Outlet />
          <SpeedInsights />
        </div>
        <Footer />
      </div>
    </>
  );
}
