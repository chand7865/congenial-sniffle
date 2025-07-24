// // HeroSection.js
// import React, { useRef, useState } from 'react';
// import { Box, Typography, Button, Grid, Container } from '@mui/material';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Html, Stars, OrbitControls } from '@react-three/drei';

// // Updated card data with correct emoji and GIF
// const cards = [
//   { title: '',gif :'https://i.giphy.com/L1R1tvI9svkIWwpVYr.webp' },
//   { title: '',gif :'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif' },
//   { title: '',  gif:'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWc2Y2NkYmphdzhodmdvdHA4NXg1eHB1djJnYmVldmxuNzQ4N2FtYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GVvrU5IhK0V4j7Gbxp/giphy.gif' },
//   { title: 'Optimize', description: 'Speed & SEO.', icon: '⚙️', bgColor: '#f59e0b' },
//   { 
//     title: '', 
//     description: '', 
//     gif: 'https://i.giphy.com/gHiRWOaXGGHOY5w6f3.webp'
//   },
// ];

// // Cards orbiting in horizontal circle
// function OrbitingCards({ radius = 3.5, rotationSpeed = 0.005, verticalOffset = 0 }) {
//   const groupRef = useRef();
//   const [hovered, setHovered] = useState(null);
//   const [paused, setPaused] = useState(false);

//   useFrame(() => {
//     if (!paused && groupRef.current) {
//       groupRef.current.rotation.y += rotationSpeed;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {cards.map((card, i) => {
//         const angle = (i / cards.length) * 2 * Math.PI;
//         const x = radius * Math.cos(angle);
//         const z = radius * Math.sin(angle);
//         const y = verticalOffset;

//         return (
//           <Html
//             key={i}
//             position={[x, y, z]}
//             center
//             billboard
//           >
//             <div
//               style={{
//                 width: '180px',
//                 height: '280px',
//                 borderRadius: '12px',
//                 boxShadow: card.gif ? 'none' : '0 8px 30px rgba(0,0,0,0.6)',
//                 border: card.gif ? 'none' : '2px solid rgba(255,255,255,0.2)',
//                 backdropFilter: 'blur(5px)',
//                 background: card.bgColor || 'transparent',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: card.gif ? '0' : '1.5rem',
//                 transform: `scale(${hovered === i ? 1.15 : 1})`,
//                 transition: 'transform 0.25s',
//                 zIndex: hovered === i ? 10 : 1,
//                 cursor: 'pointer',
//                 color: '#111',
//                 position: 'relative',
//                 overflow: 'hidden',
//               }}
//             >
//               {card.gif ? (
//                 <>
//                   <img 
//                     src={card.gif} 
//                     alt={card.title}
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       zIndex: 1,
//                       backgroundColor: 'transparent'
//                     }}
//                   />
//                   <div style={{
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     background: 'rgba(0,0,0,0.7)',
//                     color: 'white',
//                     padding: '1rem',
//                     zIndex: 2,
//                     textAlign: 'center'
//                   }}>
//                     {card.title && (
//                       <h3 style={{
//                         margin: 0,
//                         fontSize: '1.1rem',
//                         fontWeight: 600
//                       }}>
//                         {card.title}
//                       </h3>
//                     )}
//                     {card.description && (
//                       <p style={{
//                         margin: '0.5rem 0 0',
//                         fontSize: '0.8rem',
//                         opacity: 0.9
//                       }}>
//                         {card.description}
//                       </p>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div
//                     style={{
//                       fontSize: '2.5rem',
//                       marginBottom: '1rem',
//                       height: '60px',
//                       width: '60px',
//                       borderRadius: '50%',
//                       backgroundColor: 'rgba(255,255,255,0.8)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     {card.icon}
//                   </div>
//                   <h3
//                     style={{
//                       fontWeight: 600,
//                       marginBottom: '0.75rem',
//                       color: '#212529',
//                       textAlign: 'center',
//                       fontSize: '1.1rem',
//                       margin: 0,
//                     }}
//                   >
//                     {card.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: '#495057',
//                       textAlign: 'center',
//                       lineHeight: 1.5,
//                       fontSize: '0.85rem',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                       display: '-webkit-box',
//                       WebkitLineClamp: 4,
//                       WebkitBoxOrient: 'vertical',
//                       margin: 0,
//                     }}
//                   >
//                     {card.description}
//                   </p>
//                 </>
//               )}
//             </div>
//           </Html>
//         );
//       })}
//     </group>
//   );
// }

// export default function HeroSection() {
//   return (
//     <Box
//       component="section"
//       sx={{
//         width: '100%',
//         height: '100vh',
//         backgroundColor: '#fffff', 
//         position: 'relative',
//         overflow: 'hidden',
//         margin: 0,
//         padding: 0,
//         '& > div': {
//           margin: 0,
//           padding: 0
//         }
//       }}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 10], fov: 45 }}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0, 
//           pointerEvents: 'none', 
//         }}
//         gl={{ alpha: true }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={0.8} />
//         <directionalLight position={[-5, -5, -5]} intensity={0.5} />
//         <Stars radius={100} depth={50} count={5000} factor={4} fade />
//         <OrbitingCards rotationSpeed={0.01} radius={4} />
//         <OrbitControls 
//           enableZoom={true} 
//           enablePan={true} 
//           target={[0, 0, 0]}
//           minDistance={3}
//           maxDistance={10}
//         />
//       </Canvas>
//     </Box>
//   );
// }


import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  Paper,
  Chip,
  Stack,
  IconButton,
  Fade,
  Slide
} from '@mui/material';
import {
  ArrowForwardRounded,
  PlayCircleOutlineRounded,
  TrendingUpRounded,
  SecurityRounded,
  CloudRounded,
  PhoneAndroidRounded,
  WebRounded,
  DataObjectRounded
} from '@mui/icons-material';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate services
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <WebRounded sx={{ fontSize: 28 }} />,
      title: 'Web Development',
      description: 'Modern, responsive websites',
      color: '#2563eb',
      image: 'https://i.giphy.com/L1R1tvI9svkIWwpVYr.webp'
    },
    {
      icon: <PhoneAndroidRounded sx={{ fontSize: 28 }} />,
      title: 'Mobile Apps',
      description: 'iOS & Android applications',
      color: '#059669',
      image: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif'
    },
    {
      icon: <CloudRounded sx={{ fontSize: 28 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      color: '#7c3aed',
      image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWc2Y2NkYmphdzhodmdvdHA4NXg1eHB1djJnYmVldmxuNzQ4N2FtYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GVvrU5IhK0V4j7Gbxp/giphy.gif'
    },
    {
      icon: <DataObjectRounded sx={{ fontSize: 28 }} />,
      title: 'Digital Marketing',
      description: 'Growth-driven strategies',
      color: '#dc2626',
      image: 'https://i.giphy.com/gHiRWOaXGGHOY5w6f3.webp'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects' },
    { number: '50+', label: 'Clients' },
    { number: '99%', label: 'Success Rate' }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript'
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 145, 0, 0.05) 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.05) 0%, transparent 25%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Fade in={isVisible} timeout={800}>
              <Box>
                {/* Badge */}
                <Chip
                  label="🚀 Innovative Tech Solutions"
                  sx={{
                    backgroundColor: 'rgba(255, 145, 0, 0.1)',
                    color: '#ff9100',
                    fontWeight: 600,
                    mb: 3,
                    px: 2,
                    py: 1,
                    fontSize: '0.875rem',
                    border: '1px solid rgba(255, 145, 0, 0.2)'
                  }}
                />

                {/* Main Headline */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: '#1a1a1a',
                    mb: 3,
                    fontFamily: '"Inter", sans-serif'
                  }}
                >
                  Transform Your
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      background: 'linear-gradient(135deg, #ff9100 0%, #ffb74d 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Digital Vision
                  </Box>
                  Into Reality
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="h5"
                  sx={{
                    color: '#64748b',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 4,
                    maxWidth: 500
                  }}
                >
                  We build cutting-edge web applications, mobile apps, and cloud solutions that drive business growth and innovation.
                </Typography>

                {/* Technology Stack */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#94a3b8',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      mb: 2
                    }}
                  >
                    Technologies We Master
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: '#ffffff',
                          color: '#475569',
                          border: '1px solid #e2e8f0',
                          fontWeight: 500,
                          '&:hover': {
                            borderColor: '#ff9100',
                            backgroundColor: 'rgba(255, 145, 0, 0.05)'
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* CTA Buttons */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardRounded />}
                    sx={{
                      backgroundColor: '#ff9100',
                      color: 'white',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 32px rgba(255, 145, 0, 0.25)',
                      '&:hover': {
                        backgroundColor: '#e68200',
                        boxShadow: '0 12px 40px rgba(255, 145, 0, 0.35)',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Start Your Project
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircleOutlineRounded />}
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#475569',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: '#ff9100',
                        color: '#ff9100',
                        backgroundColor: 'rgba(255, 145, 0, 0.04)'
                      }
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>

                {/* Stats */}
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid item xs={4} key={index}>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 700,
                            color: '#ff9100',
                            lineHeight: 1
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
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>

          {/* Right Visual Section */}
          <Grid item xs={12} lg={6}>
            <Slide direction="left" in={isVisible} timeout={1000}>
              <Box sx={{ position: 'relative' }}>
                
                {/* Main Feature Card */}
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    mb: 3
                  }}
                >
                  <Box sx={{ position: 'relative', aspectRatio: '16/10' }}>
                    <img
                      src={services[currentService].image}
                      alt={services[currentService].title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        p: 4,
                        color: 'white'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            color: services[currentService].color,
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            p: 1,
                            mr: 2
                          }}
                        >
                          {services[currentService].icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {services[currentService].title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {services[currentService].description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

                {/* Service Navigation */}
                <Grid container spacing={2}>
                  {services.map((service, index) => (
                    <Grid item xs={3} key={index}>
                      <Paper
                        elevation={0}
                        onClick={() => setCurrentService(index)}
                        sx={{
                          p: 2,
                          textAlign: 'center',
                          cursor: 'pointer',
                          border: '1px solid #e2e8f0',
                          borderRadius: 2,
                          backgroundColor: currentService === index ? 'rgba(255, 145, 0, 0.05)' : 'white',
                          borderColor: currentService === index ? '#ff9100' : '#e2e8f0',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#ff9100',
                            backgroundColor: 'rgba(255, 145, 0, 0.05)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            color: currentService === index ? service.color : '#64748b',
                            mb: 1
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            color: currentService === index ? service.color : '#64748b'
                          }}
                        >
                          {service.title.split(' ')[0]}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(255, 145, 0, 0.2), rgba(255, 183, 77, 0.2))',
                    filter: 'blur(20px)',
                    zIndex: -1
                  }}
                />
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    left: -30,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(59, 130, 246, 0.2))',
                    filter: 'blur(25px)',
                    zIndex: -1
                  }}
                />
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;