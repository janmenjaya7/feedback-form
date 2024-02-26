import React, { useContext } from "react";
import imgs from "./review.png";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App";
function Navbar() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <div className="container fixed-top">
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      >
        <nav className="navbar navbar-expand-lg px-4">
          <div className="container-fluid">
            <a className="navbar-brand text-reset" href="/feedbacks">
              <img
                src={imgs}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Feedback
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <Box>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-reset"
                      aria-current="page"
                      to="/feedback"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-reset" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-reset" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-reset search"
                      to="/feedback-details"
                    >
                      feedback-details
                    </Link>
                  </li>
                </ul>
              </Box>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success me-3" type="submit">
                  Search
                </button>
              </form>
            </div>
            <li>
              <Box>
                {theme.palette.mode}
                <IconButton
                  // sx={{ ml: 1 }}
                  onClick={toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Box>
            </li>
          </div>
        </nav>
      </Box>
    </div>
  );
}

export default Navbar;
