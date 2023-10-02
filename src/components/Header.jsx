import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Typography variant="h6" className="title">
          <span role="img" aria-label="cupcake" className="cupcakeIcon">
            🧁
          </span>
          Cupcake Factory
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
