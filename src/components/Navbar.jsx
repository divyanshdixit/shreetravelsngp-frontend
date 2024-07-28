import React from "react";
import logo from "../images/shree.webp";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../containers/Button";
import data from "../mocks/data.json";
import Image from "../containers/Image";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import { Box, List, ListItem } from "@mui/material";
import { useMemo } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menu = useMemo(() => {
    return {
      keys: Object.keys(data.menuItems),
      values: Object.values(data.menuItems),
    };
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <Image src={logo} alt="logo" className="logo" />{" "}
      </NavLink>

      <div className="navdiv">
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
            <List className="drawer-list">
              {menu.values.map((item, index) => (
                <ListItem>
                  <NavLink to={`/${menu.keys[index]}`}> {item} </NavLink>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  className="demo_btn"
                  text={data.button.request}
                  onclick={() => navigate("/contact")}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <IconButton
          size="30px"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
          className="menu-icon"
        >
          <MenuIcon />
        </IconButton>
        <ul>
          {menu.values.map((item, index) => (
            <li>
              <NavLink to={`/${menu.keys[index]}`}> {item} </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className="demo_btn"
        text={data.button.request}
        onclick={() => navigate("/contact")}
      />
    </nav>
  );
};

export default Navbar;
