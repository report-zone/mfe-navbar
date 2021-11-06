import React from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import UserIcon from "@material-ui/icons/Person";
import Toolbar from "@mui/material/Toolbar";

//@ts-ignore
import EventBus from "header/EventBus";


const NavigationBar = () => {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState("Users");

  console.log("render NavigationBar", open)
  function toggle() {
    // must use the callback syntax of setting state
    setOpen(open => !open);
  };

  const handleClick = (text: any) => (event: any) => {
    EventBus.dispatch("NavigationSelectEvent", text);
    setSelected(text);
  };

  React.useEffect(() => {
    EventBus.subscribe("AppBarSelectEvent", 
      toggle
    );
  }, []);

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: open ? 300 : 'unset',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 300,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem button key="Users" onClick={handleClick("Users")} selected={selected === "Users"}>
            <ListItemIcon>
              <UserIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button key="Groups" onClick={handleClick("Groups")} selected={selected === "Groups"}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationBar;
