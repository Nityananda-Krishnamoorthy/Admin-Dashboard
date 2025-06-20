import React, { useState } from 'react'
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, SettingsOutlined, 
    ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/profile.jpg'
import { AppBar, IconButton, InputBase, Toolbar, useTheme, Typography, Button,
  Box, Menu, MenuItem,} from '@mui/material';


const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {

    const dispatch = useDispatch();
    const theme = useTheme();

        const [anchorEl, setAnchorEl] = useState(null);
        const isOpen = Boolean(anchorEl);
        const handleClick = (event) => setAnchorEl(event.currentTarget);
        const handleClose = () => setAnchorEl(null);

  return <AppBar sx={{ position: "static", background: "none", boxShadow: "none", zIndex: (theme) => theme.zIndex.drawer + 1,}}>
<Toolbar>
  <FlexBetween width="100%">
    
    {/* LEFT SIDE */}
    <FlexBetween>
      <IconButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
        <MenuIcon />
      </IconButton>
      <FlexBetween
        backgroundColor={theme.palette.background.alt}
        borderRadius="9px"
        gap="3rem"
        p="0.1rem 1.5rem"
      >
        <InputBase placeholder="Search..." />
        <IconButton>
          <Search />
        </IconButton>
      </FlexBetween>
    </FlexBetween>

    {/* RIGHT SIDE */}
    <FlexBetween gap="1.5rem">
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlined sx={{ fontSize: "25px" }} />
        ) : (
          <LightModeOutlined sx={{ fontSize: "25px" }} />
        )}
      </IconButton>
      <IconButton>
        <SettingsOutlined sx={{ fontSize: "25px" }} />
      </IconButton>
    </FlexBetween>
    

  </FlexBetween>
</Toolbar>
</AppBar>
};

export default Navbar
