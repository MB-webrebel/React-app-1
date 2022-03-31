import "./css/body.css";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

const Body = ({ activeIndex }) => {
  let Component = null;
  switch (activeIndex) {
    case 0:
      Component = Dashboard;
      break;
    case 1:
      Component = Users;
      break;
    case 2:
      Component = Settings;
      break;
    default:
      Component = Dashboard;
      break;
  }

  return (
    <div id="main-content">
      <div className="content">
        <Component />
      </div>
    </div>
  );
};

export default Body;
