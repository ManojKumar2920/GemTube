"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, signOut } from "@/app/firebase"; // Ensure the correct import path
import { onAuthStateChanged } from "firebase/auth";
import { MdOutlineSpaceDashboard as DashboardIcon } from "react-icons/md";
import { MdOutlineAdd as AddIcon } from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleViewPlan = () => {
    router.push("/dashboard/pricing"); // Navigate to the pricing section
  };

  if (!user) {
    return null; // Or you can return a loading spinner
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <aside
        className={`transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64 bg-gray-50 text-black border-r flex flex-col shadow-md relative`}
      >
        <div
          className="flex flex-row justify-between items-center text-black p-4 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <DashboardIcon className="cursor-pointer" />
          <AddIcon className="cursor-pointer" />
        </div>

        <div className="p-4 flex items-center justify-between">
          <span className="text-2xl font-bold ml-2">GemTube</span>
        </div>

        <nav className="flex-1 px-2 py-2">
          <Link
            href="/dashboard/gemChat"
            className="block px-4 py-2 hover:bg-gray-200 rounded"
          >
           Gem Chat
          </Link>
          <Link
            href="/dashboard/gemText"
            className="block px-4 py-2 hover:bg-gray-200 rounded"
          >
            Gem Text
          </Link>
          <div className="mt-4 text-sm">
            <h3 className="px-4 py-2 text-gray-400">History</h3>
            <Link
              href="/dashboard/all-templates"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              All Templates
            </Link>
            <Link
              href="/dashboard/new-template"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              New Template
            </Link>
            <Link
              href="/dashboard/user-overview"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              Users Overview
            </Link>
          </div>
        </nav>

        <button
          onClick={handleViewPlan}
          className="w-full  px-4 py-2 bg-[#FF0000] hover:opacity-80 text-white text-center rounded mt-auto"
        >
          View Plan
        </button>
      </aside>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-0" : "-ml-40"
        }`}
      >
        {/* Top Navigation Bar */}
        <header className="w-full bg-white flex items-center justify-between px-4 py-2 relative">
          <div className="flex items-center">
            <span className="text-xl font-bold">Chat UI</span>
          </div>
          <div className="flex items-center justify-end rounded-[25px] w-[35%] p-1 relative">
            <Image
              src={user.photoURL || "/assets/user-image.png"}
              width={35}
              height={35}
              alt="User Image"
              className="rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-md rounded w-48 py-2">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className={`flex-1 p-4 overflow-auto transition-all duration-300 ${sidebarOpen ? "w-[calc(100%-16rem)]" : "w-full"}`}>
          {children}
        </main>
      </div>

      {!sidebarOpen && (
        <div
          className="fixed flex flex-row justify-between items-center p-4 text-black rounded text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <DashboardIcon className="cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
