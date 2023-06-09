import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "../../Styles/HeaderStyles.css"
import ListIcon from '@mui/icons-material/List';

const Header = () => {
  const [mobileopen, setmobileopen] = useState(false);
  //handel menu click...
  const handelDrawerToggel = () => {
    setmobileopen(!mobileopen)
  }

  //menu-drawer...
  const drawer = (
    <Box onClick={handelDrawerToggel} sx={{ textAlign: "center" }}>

    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handelDrawerToggel}>
              <ListIcon />
            </IconButton>
            <FastfoodIcon />
            <Typography color={"gold"} variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
              My Restaurant
            </Typography>
            <ul className='mobile-navigation'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer variant="temporary" open={mobileopen} onClose={handelDrawerToggel} sx={{
            display: {
              xs: "block", sm: "none", "& .MiuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px"

              }
            }
          }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  )
}

export default Header