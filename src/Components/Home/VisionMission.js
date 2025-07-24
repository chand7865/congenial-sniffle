import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Paper,
  Card,
  CardContent,
  Fade,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  VisibilityRounded,
  TrackChangesRounded,
  FavoriteRounded,
  LightbulbRounded,
  GroupsRounded,
  TrendingUpRounded
} from '@mui/icons-material';

const VisionMissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const visionMissionData = [
    {
      title: 'Vision',
      description: 'To be the leading technology partner that transforms businesses through innovative digital solutions, empowering organizations to thrive in the digital age.',
      icon: <VisibilityRounded sx={{ fontSize: 40 }} />,
      color: '#2563eb',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)'
    },
    {
      title: 'Mission',
      description: 'We deliver cutting-edge software solutions that drive growth, efficiency, and innovation for our clients while maintaining the highest standards of quality and service.',
      icon: <TrackChangesRounded sx={{ fontSize: 40 }} />,
      color: '#059669',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
    },
    {
      title: 'Values',
      description: 'Excellence, integrity, innovation, and collaboration guide everything we do. We believe in building lasting partnerships based on trust and delivering exceptional results.',
      icon: <FavoriteRounded sx={{ fontSize: 40 }} />,
      color: '#dc2626',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'
    }
  ];

  const coreValues = [
    {
      icon: <LightbulbRounded sx={{ fontSize: 24, color: '#ff9100' }} />,
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions'
    },
    {
      icon: <GroupsRounded sx={{ fontSize: 24, color: '#ff9100' }} />,
      title: 'Collaboration',
      description: 'Working together for shared success'
    },
    {
      icon: <TrendingUpRounded sx={{ fontSize: 24, color: '#ff9100' }} />,
      title: 'Excellence',
      description: 'Delivering quality in every project'
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 145, 0, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
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
              OUR FOUNDATION
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.2,
                mb: 3,
                fontFamily: '"Inter", sans-serif'
              }}
            >
              Vision, Mission &
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #ff9100 0%, #ffb74d 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block'
                }}
              >
                Core Values
              </Box>
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.125rem' }
              }}
            >
              The principles that drive our commitment to excellence and innovation in every project we undertake
            </Typography>
          </Box>
        </Fade>

        {/* Vision, Mission, Values Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 8, md: 12 } }}>
          {visionMissionData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in={isVisible} timeout={1000 + index * 200}>
                <Card
                  elevation={0}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  sx={{
                    height: '100%',
                    border: '1px solid #e2e8f0',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      borderColor: item.color
                    }
                  }}
                >
                  {/* Top Gradient Bar */}
                  <Box
                    sx={{
                      height: 6,
                      background: item.gradient,
                      transition: 'all 0.4s ease',
                      transform: activeCard === index ? 'scaleX(1)' : 'scaleX(0.7)',
                      transformOrigin: 'center'
                    }}
                  />

                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    {/* Icon Container */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `${item.color}10`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        border: `2px solid ${item.color}20`,
                        transition: 'all 0.4s ease',
                        transform: activeCard === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <Box sx={{ color: item.color }}>
                        {item.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        fontWeight: 700,
                        color: '#1a1a1a',
                        mb: 2,
                        fontFamily: '"Inter", sans-serif'
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.7,
                        fontWeight: 400
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>

                  {/* Bottom Accent */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: item.gradient,
                      opacity: activeCard === index ? 1 : 0,
                      transition: 'opacity 0.4s ease'
                    }}
                  />
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Core Values Highlights */}
        <Fade in={isVisible} timeout={1600}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              border: '1px solid #e2e8f0',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Pattern */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255, 145, 0, 0.05), rgba(255, 183, 77, 0.05))',
                filter: 'blur(40px)'
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#1a1a1a',
                  textAlign: 'center',
                  mb: 1,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                What Drives Us Forward
              </Typography>
              
              <Typography
                sx={{
                  color: '#64748b',
                  textAlign: 'center',
                  mb: 5,
                  fontSize: '1.1rem',
                  maxWidth: 500,
                  mx: 'auto'
                }}
              >
                Our core principles that shape every decision and drive exceptional results
              </Typography>

              <Grid container spacing={4} justifyContent="center">
                {coreValues.map((value, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 145, 0, 0.05)',
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 145, 0, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          border: '2px solid rgba(255, 145, 0, 0.2)'
                        }}
                      >
                        {value.icon}
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#1a1a1a',
                          mb: 1,
                          fontSize: '1.1rem'
                        }}
                      >
                        {value.title}
                      </Typography>
                      
                      <Typography
                        sx={{
                          color: '#64748b',
                          fontSize: '0.95rem',
                          lineHeight: 1.6
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default VisionMissionSection;