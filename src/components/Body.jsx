import React from 'react';
import Sidebar from './Sidebar';
import ButtonList from './ButtonList';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

const Body = () => {
  const isOpen = useSelector((state) => state.sideBar);
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'w-40' : 'w-24'
        } overflow-y-auto`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto mt-16 p-4">
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
