import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "next/link";
import HelpIcon from '@mui/icons-material/Help';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link href="/dashboard/">Dashboard</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/appointment/myappointments">My Appointments</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/results/">Results</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <Link
        href="https://console.dialogflow.com/api-client/demo/embedded/bd6fd84e-6700-4568-8e4a-09e52556598e"
        legacyBehavior
      >
        <a target="_blank" rel="noopener noreferrer" className="link-item">
          Support
        </a>
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const staffListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link href="/dashboard/">Dashboard</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/appointment/myappointments">My Appointments</Link>
    </ListItemButton> */}
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Logs" />
    </ListItemButton>
  </React.Fragment>
);
