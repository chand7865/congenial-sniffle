import React from 'react';
import { Box, Typography, Container, Grid, Link, Paper, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, X, YouTube } from '@mui/icons-material';

const socialLinks = [
  { icon: <Facebook />, url: "https://www.facebook.com/khkrinnovatorstech", color: '#1877F2', hover: '#166FE5' },
  { icon: <Instagram />, url: "https://www.instagram.com/innovators_tech_solution", color: '#E4405F', hover: '#D42D6D' },
  { icon: <LinkedIn />, url: "https://www.linkedin.com/company/khkr-innovators-tech-solutions-pvt-ltd/", color: '#0A66C2', hover: '#084D94' },
  { icon: <X sx={{ fontSize: '1.85rem' }} />, url: "https://twitter.com/InnovatorsTechS", color: '#000000', hover: '#1DA1F2' },
  { icon: <YouTube />, url: "https://www.youtube.com/@InnovatorsTechSolutions", color: '#FF0000', hover: '#CC0000' }
];

const footerLinks = [
  ['Home', 'About Us'],
  ['Services', 'Industries'],
  ['Our Works', 'Technology'],
  ['Clients', 'Contact Us']
];

const legalLinks = [
  { text: "FAQ's", id: "faqs" },
  { text: "Privacy Policy", id: "privacy" },
  { text: "Terms & Conditions", id: "terms" }
];

const Footer = () => {
  return (
    <Paper component="footer" sx={{ 
      mt: 'auto', bgcolor: 'white', color: 'black', py: 2, width: '100%',
      '& .MuiTypography-root, & .MuiLink-root': { color: 'black' },
      '& .MuiLink-root:hover': { color: '#ff9800' }
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', pr: { md: '20px' } }}>
              <img 
               src={require('./../../assests/logo.png')} 
                alt="Company Logo" 
                style={{ 
                  maxWidth: '220px', 
                  height: 'auto', 
                  marginBottom: '16px',  
                  display: 'block'  
                }} 
              />
              <Box sx={{ 
                display: 'flex', 
                gap: '16px', 
                mb: 2,
                '& .MuiSvgIcon-root': {  
                  fontSize: '1.5rem'
                }
              }}>
                {socialLinks.map((item, index) => (
                  <IconButton 
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: item.color, p: 0.5,
                      '&:hover': { color: item.hover, bgcolor: `rgba(${hexToRgb(item.color)}, 0.1)` }
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: 1, 
              pl: { md: '20px' },
              borderLeft: { md: '1px solid rgba(0,0,0,0.1)' }
            }}>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px 20px',
                width: '100%',
                '& > div': { 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  '& a': {
                    textDecoration: 'none',  
                    '&:hover': {
                      textDecoration: 'none',  
                      color: 'inherit'  
                    }
                  }
                }
              }}>
                {footerLinks.map((group, i) => (
                  <div key={i}>
                    {group.map((link, j) => (
                      <Link key={j} href={`#${link.toLowerCase().replace(' ', '-')}`}>
                        {link}
                      </Link>
                    ))}
                  </div>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ 
          mt: 0, pt: 2, borderTop: '1px solid rgba(0,0,0,0.25)',
          display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', alignItems: 'center', gap: 1
        }}>
          <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left' }, mb: { xs: 1, sm: 0 } }}>
            &copy; 2025, KHKR Innovators Tech Solutions. All Rights Reserved
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {legalLinks.map((link, i) => (
              <React.Fragment key={i}>
                <Link href={`#${link.id}`} sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}>
                  {link.text}
                </Link>
                {i < legalLinks.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export default Footer;