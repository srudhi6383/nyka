import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Card className="w-full max-w-[15rem] shadow-xl shadow-blue-gray-900/5 sticky top-0 bottom-0 rounded-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="text-app-blue">
          Nyka Dashboard
        </Typography>
      </div>
      <List>
        <Link to="/" className="flex ">
          <ListItem className="hover:text-app-blue">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 " />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link to="/analytics" className="flex">
          <ListItem className="hover:text-app-blue">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Analytics
          </ListItem>
        </Link>
        <Link to="/logout" className="flex">
          <ListItem className="hover:text-app-blue">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            {!token ? "Login" : "Log Out"}
          </ListItem>
        </Link>
      </List>
    </Card>
  );
};

export default Sidebar;
