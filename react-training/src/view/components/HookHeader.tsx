import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

function HookHeader() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/useState'}>UseState</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/useEffect'}>UseEffect</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/useRef'}>useRef</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/useMemo'}>useMemo</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/useContext'}>useContext</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HookHeader;
