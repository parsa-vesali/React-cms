import React from "react";
import { newMembers } from "../../datas";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">کاربران جدید</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.img} alt="profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.userName}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmBtn">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
