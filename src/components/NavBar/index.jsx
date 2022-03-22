import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

import "./style.css";

function handleConverter() {}

export const NavBar = () => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/converter"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button
              onClick={handleConverter}
              color="inherit"
              variant="outlined"
            >
              Converter
            </Button>
          </Link>
          <Link to="/kms" style={{ textDecoration: "none", color: "white" }}>
            <Button
              onClick={handleConverter}
              color="inherit"
              variant="outlined"
            >
              KMS
            </Button>
          </Link>
          <Link to="/todo" style={{ textDecoration: "none", color: "white" }}>
            <Button
              onClick={handleConverter}
              color="inherit"
              variant="outlined"
            >
              ToDo
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>{" "}
  </>
);

export default NavBar;
