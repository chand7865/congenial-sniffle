import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const servicesData = [
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

const Services = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          We offer a wide range of professional services to help your business grow
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  {service.title}
                </Typography>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <Typography variant="body1">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
