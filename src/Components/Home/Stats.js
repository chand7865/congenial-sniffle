// src/StatsSection.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

// ✅ Particle Bubble Background
const StatsBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };
console.log('Particles initialized');
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 40 },
          color: { value: '#FFA500' },
          size: { value: 6, random: true },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: 'bounce' },
          },
          links: {
            enable: true,
            distance: 140,
            color: '#ffa500',
            opacity: 0.4,
            width: 1,
          },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            resize: true,
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.6 } },
          },
        },
      }}
      style={{
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

// ✅ Single CircularStat Component
const CircularStat = ({ label, value, circleText }) => {
  return (
    <Box
      sx={{
        width: 160,
        height: 160,
        borderRadius: '50%',
        border: '5px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
        position: 'relative',
        boxShadow: '0 0 20px rgba(255,165,0,0.3)',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'orange' }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
    </Box>
  );
};

// ✅ Main Section with Background + Stats
const StatsSection = () => {
  return (
    <section id="stats" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Bubble Background */}
      <StatsBackground />

      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Our Impact in <span style={{ color: 'orange' }}>Numbers</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: '700px', mx: 'auto', color: 'text.secondary', fontSize: '1.1rem' }}
          >
            Delivering excellence and driving success through innovative solutions
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 8,
            mt: 6,
            mb: 0,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <CircularStat
            label="Projects Completed"
            value={150}
            circleText="• Success • Delivered • Client Satisfaction • "
          />
          <CircularStat
            label="Happy Clients"
            value={150}
            circleText="• Trust • Partnership • Long-term • "
          />
          <CircularStat
            label="Team Members"
            value={100}
            circleText="• Experts • Dedicated • Innovative • "
          />
          <CircularStat
            label="Years of Experience"
            value={6}
            circleText="• Excellence • Growth • Leadership • "
          />
        </Box>
      </Container>
    </section>
  );
};

export default StatsSection;
