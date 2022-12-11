import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { Button } from "@mui/material";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {"Rajah Tupas EMR"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/auth/signin/"
              sx={rightLink}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 35,
                  backgroundColor: "#26bfa6",
                  padding: "5px 20px",
                  fontSize: "14px",
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/auth/signup/"
              sx={{ ...rightLink, color: "red" }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 35,
                  backgroundColor: "#26bfa6",
                  padding: "5px 20px",
                  fontSize: "14px",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
