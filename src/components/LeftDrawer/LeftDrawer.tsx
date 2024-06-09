"use client";

import Image from "next/image";
import FrontDeskLogo from "../../assets/Front_Desk_Logo.svg";
import CollapseIcon from "../../assets/collapse_logo.svg"; // Keep this if you still need the collapse icon somewhere else
import LocationIcon from "../../assets/location.svg";
import {
  DashboardData,
  HelpCenterData,
  LeftDrawerItem,
  LocationData,
  UserDataCard,
} from "../../constants/leftDrawerItems";
import { useState } from "react";

export default function LeftDrawer() {
  const [userCardOpen, setUserCardOpen] = useState(false);
  const [locationCardOpen, setLocationCardOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`p-2 flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? "w-[5%]" : "w-[20%]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center p-4" : "gap-4"
            }`}
          >
            <div>
              <Image src={FrontDeskLogo} alt="front desk logo" />
            </div>
            {!isCollapsed && (
              <div className="font-bold text-[18px]">
                Front <span className="relative -top-1 ">.</span> Desk
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className="cursor-pointer" onClick={toggleCollapse}>
              <Image
                className="w-[20px]"
                src={CollapseIcon}
                alt="collapse icon"
              />
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className=" flex items-center flex-col justify-center mt-4">
            <div className=" w-[100%] flex items-center justify-between rounded-lg border-solid border-black bg-white p-2">
              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder="location"
                  className="w-[100%] outline-none"
                />
              </div>
              <div>
                <Image src={LocationIcon} alt="search location" />
              </div>
            </div>
            <div className="w-[90%] bg-slate-500/20 rounded-b-lg pl-2 pr-2 pb-2 ">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-xl text-gray-800 text-[16px]">
                    {LocationData.locationTime}
                  </span>
                  <span className="font-semibold text-md text-[14px]">
                    {LocationData.locationDate}
                  </span>
                </div>

                {locationCardOpen && (
                  <div
                    onClick={() => {
                      setLocationCardOpen(!locationCardOpen);
                    }}
                  >
                    <Image
                      className={`w-[20px] rotate-0 pt-1 cursor-pointer`}
                      src={LocationData.locationDataDownArrow}
                      alt="down arrow icon"
                    />
                  </div>
                )}
              </div>
              {!locationCardOpen && (
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div>
                      <Image
                        className="w-[20px]"
                        src={LocationData.globeIcon}
                        alt="globe icon"
                      />
                    </div>
                    <div>{LocationData.locationTimeGap}</div>
                  </div>

                  <div
                    onClick={() => {
                      setLocationCardOpen(!locationCardOpen);
                    }}
                  >
                    <Image
                      className={`w-[20px] rotate-180 cursor-pointer`}
                      src={LocationData.locationDataDownArrow}
                      alt="down arrow icon"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-2">
          {LeftDrawerItem.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center m-2 p-1 cursor-pointer hover:bg-white rounded-md hover:font-bold ${
                isCollapsed ? "justify-center" : "gap-4"
              }`}
            >
              <div>
                <Image
                  className="w-[20px]"
                  src={item.itemIcon}
                  alt={item.itemName}
                />
              </div>
              {!isCollapsed && (
                <div className="text-[16px]">{item.itemName}</div>
              )}
            </div>
          ))}
        </div>

        {isCollapsed && (
          <div className="cursor-pointer pl-4 pt-2 rotate-180" onClick={toggleCollapse}>
            <Image
              className="w-[22px]"
              src={CollapseIcon}
              alt="collapse icon"
            />
          </div>
        )}
      </div>

      <div>
        <div
          className={`flex items-center p-2 hover:bg-white rounded-md ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div className="flex gap-2 items-center">
            <div>
              <Image
                className="w-[20px]"
                src={DashboardData.dashboardIcon}
                alt={DashboardData.dashboardName}
              />
            </div>
            {!isCollapsed && <div>{DashboardData.dashboardName}</div>}
          </div>
          {!isCollapsed && (
            <div>
              <Image
                className="w-[20px] cursor-pointer"
                src={DashboardData.dashboardRouteIcon}
                alt={DashboardData.dashboardName}
              />
            </div>
          )}
        </div>

        <div
          className={`flex items-center p-2 bg-white rounded-xl mt-2 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div className="flex gap-2 items-center">
            <div>
              <Image
                className="w-[30px]"
                src={UserDataCard.userProfileImage}
                alt={UserDataCard.userName}
              />
            </div>
            {!isCollapsed && (
              <div>
                <div className="font-semibold">{UserDataCard.userName}</div>
                {userCardOpen && (
                  <div className="text-slate-700/50">
                    {UserDataCard.userEmail}
                  </div>
                )}
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div
              className="cursor-pointer"
              onClick={() => {
                setUserCardOpen(!userCardOpen);
              }}
            >
              <Image
                className={`w-[20px] ${
                  userCardOpen ? "rotate-180" : "rotate-0"
                }`}
                src={UserDataCard.userCardDownArrow}
                alt="down arrow icon"
              />
            </div>
          )}
        </div>

        <div
          className={`flex items-center mt-2 p-2 ${
            isCollapsed ? "justify-center" : "gap-2"
          }`}
        >
          <div>
            <Image
              className="w-[20px]"
              src={HelpCenterData.helpCenterIcon}
              alt={HelpCenterData.helpCenterIcon}
            />
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-semibold">
                {HelpCenterData.helpCenterTitle}
              </div>
              <div className="text-gray-600">
                {HelpCenterData.helpCenterDescription}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
