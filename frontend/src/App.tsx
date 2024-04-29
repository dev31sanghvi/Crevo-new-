"use client";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FloatingNav } from "../components/navbar"
import { Footer } from '../components/footer'
import Home from "../pages/home";
import AboutUs from '../pages/about';
import Contact from '../pages/contact';
import { IconHome, IconPhone, IconUsers } from "@tabler/icons-react";
import { SpeedInsights } from "@vercel/speed-insights/react"

import { BackgroundBeams } from "../pages/background";

function App() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    
  ];

 return (
    <>
    <BackgroundBeams />
      <Router>
      <div className="relative w-full">
        <FloatingNav navItems={navItems}/>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer/>
        <SpeedInsights/>
      </Router>
    </>
  )
}
export default App
