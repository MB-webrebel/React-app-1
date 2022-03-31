import { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";

import { MenuItem } from "../components";

import "./css/leftMenu.css";

const LeftMenu = ({ activeIndex, onActiveIndexChanged }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div id="left-menu" className={collapsed ? "collapsed" : ""}>
      <div id="collapser">
        {!collapsed && <h3>Navigation</h3>}
        <span
          className={`chevron ${collapsed ? "right" : "left"}`}
          onClick={() => setCollapsed((prev) => !prev)}
        />
      </div>

      <div id="menu-items">
        <MenuItem
          icon={DashboardIcon}
          label="Dashboard"
          isActive={activeIndex === 0}
          onClick={() => onActiveIndexChanged(0)}
        />
        <MenuItem
          icon={AccountCircleIcon}
          label="User"
          isActive={activeIndex === 1}
          onClick={() => onActiveIndexChanged(1)}
        />
        <MenuItem
          icon={SettingsIcon}
          label="Settings"
          isActive={activeIndex === 2}
          onClick={() => onActiveIndexChanged(2)}
        />
      </div>
    </div>
  );
};

export default LeftMenu;
