import React, { useState, useEffect } from 'react';
import './Aboutus.css';
import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Button, 
  Fade, 
  Slide,
  Paper,
  Chip,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  TrendingUpRounded,
  SecurityRounded,
  GroupWorkRounded,
  BuildRounded
} from '@mui/icons-material';

const Aboutus = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  const services = [
    { icon: <BuildRounded />, title: 'Development', color: '#2563eb' },
    { icon: <SecurityRounded />, title: 'Security', color: '#059669' },
    { icon: <GroupWorkRounded />, title: 'Consulting', color: '#dc2626' },
    { icon: <TrendingUpRounded />, title: 'Growth', color: '#7c3aed' }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#ffffff',
      position: 'relative'
    }}>
      {/* Header Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 } }}>
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: '#ff9100',
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: '0.875rem',
                mb: 2,
                display: 'block'
              }}
            >
              ABOUT OUR COMPANY
            </Typography>
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.1,
                mb: 3,
                fontFamily: '"Inter", sans-serif'
              }}
            >
              We Build Digital
              <Box component="span" sx={{ 
                display: 'block',
                background: 'linear-gradient(135deg, #ff9100 0%, #ffb74d 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Excellence
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#64748b',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              Transforming businesses through innovative technology solutions and strategic digital partnerships
            </Typography>
          </Box>
        </Fade>

        {/* Stats Section */}
        <Fade in={isVisible} timeout={1000}>
          <Grid container spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    border: '1px solid #e2e8f0',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#ff9100',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 700,
                      color: '#ff9100',
                      mb: 1
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Fade>

        {/* Main Content */}
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Slide direction="right" in={isVisible} timeout={1200}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 700,
                    color: '#1a1a1a',
                    mb: 3,
                    lineHeight: 1.3
                  }}
                >
                  Leading Innovation in
                  <Box component="span" sx={{ color: '#ff9100' }}> Tech Solutions</Box>
                </Typography>

                <Typography
                  sx={{
                    color: '#475569',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.7,
                    mb: 3,
                    fontWeight: 400
                  }}
                >
                  Founded with a vision to transform ideas into innovative digital realities, 
                  <Box component="span" sx={{ fontWeight: 600, color: '#1a1a1a' }}> KHKR Innovators Tech Solutions </Box>
                  emerged as a dedicated partner for businesses seeking cutting-edge software, web, and mobile application development.
                </Typography>

                <Typography
                  sx={{
                    color: '#475569',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.7,
                    mb: 4,
                    fontWeight: 400
                  }}
                >
                  From our inception, we have committed ourselves to delivering tailored solutions that empower organizations to thrive in an increasingly digital world.
                </Typography>

                {/* Service Tags */}
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                  {services.map((service, index) => (
                    <Chip
                      key={index}
                      icon={service.icon}
                      label={service.title}
                      sx={{
                        backgroundColor: `${service.color}10`,
                        color: service.color,
                        border: `1px solid ${service.color}20`,
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: service.color
                        }
                      }}
                    />
                  ))}
                </Stack>

                {/* Expandable Content */}
                <Slide direction="up" in={showMore} mountOnEnter unmountOnExit>
                  <Box sx={{ mb: 4 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: 2,
                        borderLeft: '4px solid #ff9100'
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#1a1a1a',
                          mb: 2
                        }}
                      >
                        Our Mission & Values
                      </Typography>
                      
                      <Typography
                        sx={{
                          color: '#475569',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          mb: 2
                        }}
                      >
                        Our culture is built on collaboration, creativity, and a relentless pursuit of excellence. We foster an environment where every team member is empowered to innovate and contribute to our shared success.
                      </Typography>
                      
                      <Typography
                        sx={{
                          color: '#475569',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          fontWeight: 500
                        }}
                      >
                        At KHKR Innovators, we are more than just developers; we are digital transformation partners committed to turning your vision into reality.
                      </Typography>
                    </Paper>
                  </Box>
                </Slide>

                {/* CTA Buttons */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      backgroundColor: '#ff9100',
                      color: 'white',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: '0 4px 14px rgba(255, 145, 0, 0.25)',
                      '&:hover': {
                        backgroundColor: '#e68200',
                        boxShadow: '0 6px 20px rgba(255, 145, 0, 0.35)',
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {showMore ? 'Show Less' : 'Learn More'}
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#475569',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        borderColor: '#ff9100',
                        color: '#ff9100',
                        backgroundColor: 'rgba(255, 145, 0, 0.04)'
                      }
                    }}
                  >
                    Get In Touch
                  </Button>
                </Stack>
              </Box>
            </Slide>
          </Grid>

          {/* Right Media */}
          <Grid item xs={12} lg={6}>
            <Slide direction="left" in={isVisible} timeout={1200}>
              <Box sx={{ position: 'relative' }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    position: 'relative',
                    aspectRatio: '16/10',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                  }}
                >
                  <video 
                    src={require('../../assests/aboutuspic.mp4')} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="aboutus-video" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }} 
                  />
                  
                  {/* Subtle Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom right, rgba(255, 145, 0, 0.1) 0%, transparent 50%)',
                      pointerEvents: 'none'
                    }}
                  />
                </Paper>

                {/* Floating Badge */}
                <Paper
                  elevation={0}
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    p: 3,
                    borderRadius: 2,
                    border: '1px solid #e2e8f0',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    minWidth: 120,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#ff9100',
                      fontSize: '1.5rem',
                      lineHeight: 1
                    }}
                  >
                    2019
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#64748b',
                      fontWeight: 500,
                      fontSize: '0.75rem'
                    }}
                  >
                    ESTABLISHED
                  </Typography>
                </Paper>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Aboutus;