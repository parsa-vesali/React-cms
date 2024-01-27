import React from "react";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

import { Link } from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                صفحه اصلی
              </li>
            </Link>
            <Link to="/analysis" className="link">
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                تجزیه و تحلیل
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              فروش
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">دسترسی سریع</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                کاربران
              </li>
            </Link>
            <Link to="/newuser" className="link">
              <li className="sidebarListItem ">
                <PermIdentityIcon className="sidebarIcon" />
                کاربر جدید
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                محصولات
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              گردش مالی
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              گزارش ها
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">اعلان ها</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              ایمیل
            </li>
            <li className="sidebarListItem  ">
              <DynamicFeedIcon className="sidebarIcon" />
              نظرات
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              پیام ها
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">پرسنل</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              مدیریت
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              گزارش ها
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
