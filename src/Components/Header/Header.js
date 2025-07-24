import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CampaignIcon from '@mui/icons-material/Campaign';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { useLocation, useNavigate } from 'react-router-dom';
import logoLight from '../../assests/logo.png';
import logoDark from '../../assests/logoWhite.png';
import ServicesDropdown from '../Services/ServicesDropdown';

const navItems = [
  { label: 'Home', path: '/', icon: <HomeIcon fontSize="small" sx={{ mr: 0.5 }} /> },
  { label: 'About Us', path: '/about', icon: <PersonOutlineIcon fontSize="small" sx={{ mr: 0.5 }} /> },
  // { label: 'Our Team', path: '/#team', icon: <GroupsIcon fontSize="small" sx={{ mr: 0.5 }} /> },
];

const CustomNavbar = ({ toggleColorMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOpen = Boolean(anchorEl);

  const handleDropdownOpen = (event) => setAnchorEl(event.currentTarget);
  const handleDropdownClose = () => setAnchorEl(null);
  const handleNavClick = (path, label) => {
    if (label === 'Home') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        // If already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (label === 'About Us') {
      if (location.pathname === '/') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/about');
      }
    } else if (label === 'Our Team') {
      if (location.pathname === '/') {
        const teamSection = document.getElementById('team');
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/#team');
      }
    } else {
      navigate(path);
    }
    setDrawerOpen(false);
    handleDropdownClose();
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: '16px 16px 0 0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          px: 0,
          py: 0,
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            py: 0.5,
            px: 2,
           
            backgroundColor: theme.palette.mode === 'dark' ? '#2b2b2b' : '#f8f9fa',
            borderBottom: `1px solid ${theme.palette.divider}`,
            borderRadius: '0 0 16px 16px',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, minWidth: '200px' }}>
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              className="logo-animated"
              style={{
                width: 130,
                height: 'auto',
                marginTop: '-8px',
                transition: 'all 0.3s ease-in-out',
                marginRight: '16px',
                objectFit: 'contain'
              }}
            />
            <Box
              sx={{
                ml: 2,
                fontFamily: 'Roboto, sans-serif',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '30ch',
                height: '24px',
                animation: 'typing 2s steps(32) forwards',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '1.6rem', lineHeight: '24px'}}>
                <span style={{ color: theme.palette.text.primary }}>Welcome to</span>
                <Box component="span" sx={{ color: '#F79615', ml: 1 }}>Innovators</Box>
              </Typography>
            </Box>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.path, item.label)}
                    disableRipple
                    startIcon={item.icon}
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: '999px',
                      color: theme.palette.text.primary,
                      backgroundColor: 'transparent',
                      textTransform: 'none',
                      fontSize: '0.88rem',
                      position: 'relative',
                      minWidth: 'unset',
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                      '&:active': {
                        backgroundColor: 'rgba(200, 100, 0, 0.15)',
                      },
                      '&.Mui-focusVisible, &:focus': {
                        backgroundColor: 'rgba(200, 100, 0, 0.15)',
                      },
                      '&::before, &::after': {
                        display: 'none'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <ServicesDropdown />
              </Box>

              {/* Theme Toggle */}
              <Box sx={{ display: 'flex', alignItems: 'center', mx: 0.5 }}>
                <Tooltip title="Toggle Theme">
                  <IconButton 
                    onClick={toggleColorMode} 
                    sx={{ 
                      color: theme.palette.text.primary,
                      p: 0.5
                    }}
                  >
                    {isDarkMode ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, mt: 5, backgroundColor: theme.palette.background.paper, height: '100%' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => handleNavClick(item.path, item.label)}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: location.pathname === item.path ? '#F79615' : theme.palette.text.primary,
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleNavClick('/contact', 'Contact Us')}
                sx={{
                  mt: 1,
                  background: '#FDAF18',
                  color: '#fff',
                  textTransform: 'none',
                }}
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 30ch }
          }
          .logo-animated:hover {
            transform: scale(1.08);
            filter: drop-shadow(0 0 6px rgba(255, 174, 0, 0.5));
          }
        `}
      </style>
    </>
  );
};

export default CustomNavbar;
