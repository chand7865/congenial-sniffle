import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

// Import images
import hiringManager from '../../assests/hiringManager.png';
import projectManager from '../../assests/projectManager.png';

const teamMembers = [
  {
    name: "Venkatesh Garikapati",
    title: "Project Manager",
    description: "Hobbies: YOGA daily evening, meditation",
    image: projectManager
  },
  {
    name: "Tirupati Reddy",
    title: "Team lead",
    description: "Hobbies :Drinking green tea ",
    image: "https://via.placeholder.com/80"
  },
  {
    name: "Harsha vardhan",
    title: "junior FE dev",
    description: "Hobbies :working hard,staying strong.",
    image: ""
  },
  {
    name: "Mohan gopi krishna",
    title: "Hiring Manager",
    description: "Running daily morning,drinking black tea",
    image: ""
  },
  {
    name: "S.Maheshwar Reddy",
    title: "Operational Manager",
    description: "Expert in scalable cloud and software architecture.",
    image: "https://via.placeholder.com/80"
  },
 
];

const TeamSection = () => {
  return (
    <Box sx={{ p: 4, background: '#ffffff', overflowX: 'auto', width: '100%' }} id="team">
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ 
            fontWeight: 'bold', 
            color: '#000000',
            mb: 6,
            fontFamily: `'Georgia', serif`,
          }}
        >
          Meet Our Team
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 2,
            width: '100%',
            minWidth: '1200px', // Ensure minimum width for all cards
            pb: 2, // Add some padding at the bottom
            '& > *': {
              flex: '0 0 calc(16.666% - 16px)', // 6 cards with gap
              minWidth: '180px',
            },
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '10px',
              '&:hover': {
                background: '#555',
              },
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                width: '100%',
                borderRadius: 3,
                textAlign: 'center',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 300,
                backgroundColor: '#fff',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.5s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    border: '3px solid #f5f5f5',
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: 500, mb: 1 }}
                >
                  {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
