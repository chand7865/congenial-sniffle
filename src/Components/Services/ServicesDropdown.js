import React, { useState } from 'react';
import { Button, Typography, Popover, Grid, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const servicesData = [
  {
    title: 'Web Development',
    items: [
      'Custom Website Design & Development',
      'E-commerce Solutions',
      'CMS Development (WordPress, Shopify, Joomla)',
      'Web Portal Development',
      'Design, Develop and Deploy (3Ds, 3PVs, 3Cs)',
    ],
  },
  {
    title: 'Mobile App Development',
    items: [
      'Android & iOS App Development',
      'Cross-platform Apps (Flutter, React Native)',
      'UI/UX Design',
      'App Maintenance & Support',
    ],
  },
  {
    title: 'Software Development',
    items: [
      'Enterprise Application Development',
      'ERP & CRM Solutions',
      'SaaS-Based Application',
      'Desktop Software Solutions',
    ],
  },
  {
    title: 'Cloud Solutions',
    items: [
      'AWS / Azure / Google Cloud Integration',
      'Cloud Infrastructure Setup',
      'Cloud Migration Services',
      'DevOps and CI/CD Pipeline Implementation',
    ],
  },
  {
    title: 'Digital Marketing',
    items: [
      'SEO, SEM, and SMM',
      'Branding & Creative Content',
      'PPC Campaigns',
      'Email Marketing Automation',
    ],
  },
  {
    title: 'IT Consulting & Support',
    items: [
      'Technology Assessment',
      'Strategic IT Planning',
      'System Integration',
      'Remote & On-site Support',
      'AI / ML',
    ],
  },
];

const ServicesDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        Services
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onMouseLeave={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{ 
          sx: { 
            p: 4, 
            width: '90vw', 
            maxWidth: '1200px',
            mt: 1,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            zIndex: (theme) => theme.zIndex.drawer + 2, // Higher than header
            position: 'relative',
            backgroundColor: (theme) => theme.palette.background.paper,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #F79615 0%, #FFC107 100%)',
            },
          } 
        }}
      >
        <Grid container spacing={4}>
          {servicesData.map((category, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                {category.title}
              </Typography>
              {category.items.map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ 
                    color: 'text.secondary', 
                    mb: 0.5,
                    '&:hover': {
                      color: 'primary.main',
                      cursor: 'pointer',
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  );
};

export default ServicesDropdown;
