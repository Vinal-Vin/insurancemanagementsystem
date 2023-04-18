"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const NavBar = () => {
  return (
    <>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div>
            <h1 className="flex items-center p-2 dark:text-white">IMS System</h1>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link href={'/'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HomeIcon />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link href={'/dashboard'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <DashboardCustomizeRoundedIcon />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href={'/policy'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <PolicyIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Policy</span>
              </Link>
            </li>
            <li>
              <Link href={'/premiums'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <WorkspacePremiumIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Premium</span>
              </Link>
            </li>
            <li>
              <Link href={'/customers'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <PeopleIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Customers</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col">
            <Button onClick={() => signIn()} className="flex flex-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <LoginRoundedIcon />
              <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </Button>
            <Button onClick={() => signOut()} className="flex flex-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <LogoutRoundedIcon />
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </Button>
          </div>
        </div>
      </aside >
    </>
  );
};

export default NavBar;
