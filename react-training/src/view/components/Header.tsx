import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/'}>Home</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/intro'}>Introduction</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/useState'}>Hooks</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/hookform'}>Hookform</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/apiCall'}>ApiCall</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/apiCallWithRedux'}>ApiCallWithRedux</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
