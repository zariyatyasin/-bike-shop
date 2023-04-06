import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function MobileNav() {
  const [value, setValue] = React.useState("recents");
  const { currentUser } = useSelector((state) => state.LoginInUser);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={
          <Link to={"/"}>
            <HomeIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={
          <Link to={"/checkout"}>
            <ShoppingCartIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={
          <Link
            to={`${
              !currentUser?.isAdmin ? "/profile/:link" : "/admin/profile/"
            }`}
          >
            <PersonIcon />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
