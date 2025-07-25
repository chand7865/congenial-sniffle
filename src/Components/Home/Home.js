import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Fade, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiMongodb, SiMysql, SiPostgresql, SiFirebase } from 'react-icons/si';
import AnimatedNetwork from './AnimatedNetwork';
import TeamSection from './TeamSection';
import ServicesSection from './ServicesSection';
import HeroSection from './HeroSection';
import AboutUs from './Aboutus';
import CircularStat from './CircularStat';
import vision from '../../assests/vision.jpg'
import VisionMissionSection from './VisionMission';
import StatsSection from './Stats'; 
const HoverableCard = ({ title, description, image, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
  position: 'relative',
  borderRadius: '50%', // round ball
  overflow: 'hidden',
  boxShadow: 3,
  height: '400px',
width: '400px',

  mx: 'auto',
  maxWidth: '400px',
  transition: 'all 0.3s ease',
  textAlign: 'center',

  animation: 'bounce 2s ease-in-out infinite',
  animationDelay: alt === 'Mission illustration' ? '1s' : '0s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
  },
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-30px)' },
  },
}}
>
      {/* Image (always visible) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'all 0.5s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          filter: hovered ? 'brightness(0.5)' : 'brightness(0.7)',
        }}
      />
      
      {/* Title (always visible but moves up on hover) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          transform: hovered ? 'translateY(0)' : 'translateY(0)',
          transition: 'all 0.3s ease',
        }}
      >
        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            color: '#ffffff',
            fontWeight: 600,
            mb: hovered ? 2 : 0,
            transition: 'all 0.3s ease',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          {title}
        </Typography>
        
        {/* Description (only visible on hover) */}
        <Fade in={hovered} timeout={300}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              opacity: hovered ? 1 : 0,
              height: hovered ? 'auto' : 0,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              mt: hovered ? 1 : 0,
            }}
          >
            {description}
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

const Section = styled(Box)(({ theme }) => ({
  padding: 0,
  backgroundColor: '#ffffff',
  '&:nth-of-type(even)': {
    backgroundColor: '#ffffff',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: '#ffffff',
  },
}));

const Home = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  const [highlightInnovators, setHighlightInnovators] = useState(false);
  const [aboutHighlight, setAboutHighlight] = useState(false);
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 50, label: 'Projects Completed', suffix: '+' },
    { id: 2, value: 0, target: 6, label: 'Years Experience', suffix: '+' },
    { id: 3, value: 0, target: 100, label: 'Client Satisfaction', suffix: '%' },
    { id: 4, value: 0, target: 24, label: 'Support', suffix: '/7' }
  ]);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setHighlightInnovators(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const renderTitle = () => {
    return (
      <>
        <Box component="span" sx={{ color: '#000000' }}>
          Dream big, Innovate bigger with{' '}
        </Box>
        <Box 
          component="span"
          sx={{
            display: 'inline',
            transition: 'all 0.3s ease',
            color: highlightInnovators ? '#FF6B35' : '#000000',
            fontWeight: highlightInnovators ? 900 : 'inherit',
            whiteSpace: 'nowrap',
          }}
        >
          Innovators
        </Box>
      </>
    );
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (aboutInView) {
      const timer = setTimeout(() => {
        setAboutHighlight(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [aboutInView]);

  // Animate stats counter sequentially with 1s delay between each
  useEffect(() => {
    if (aboutInView) {
      const duration = 2000; // 2 seconds
      const interval = 50; // update every 50ms
      
      stats.forEach((stat, index) => {
        // Start each stat animation with 1s delay between them
        setTimeout(() => {
          const steps = duration / interval;
          const increment = stat.target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
              current = stat.target;
              clearInterval(timer);
            }
            
            setStats(prevStats => 
              prevStats.map(s => 
                s.id === stat.id 
                  ? { ...s, value: Math.round(current) } 
                  : s
              )
            );
          }, interval);
          
          return () => clearInterval(timer);
        }, index * 1000); // 1000ms delay between each stat
      });
    }
  }, [aboutInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Add Values to data
const visionMissionData = [
  {
    title: 'Mission',
    description:
      'Our mission is to empower individuals and organizations by delivering innovative solutions that drive growth, foster creativity, and promote sustainable development for communities worldwide.',
    color: '#c37855',
    icon: '🚀',
  },
  {
    title: 'Vision',
    description:
      'We envision a future where technology and human ingenuity combine to solve global challenges, enabling every individual to reach their fullest potential and live a better life.',
    color: '#7f8ca1',
    icon: '👁️',
  },
  {
    title: 'Values',
    description:
      'We believe in integrity, innovation, and collaboration — values that guide every solution we build and every partnership we form, ensuring trust and excellence in everything we do.',
    color: '#4caf50', // green tone
    icon: '🌟',
  },
];

  return (
    <Box sx={{ '& > section:first-of-type': { pt: 0 } }}>


            {/* About Us Section */}
      {/* <Section id="about">
        <Container maxWidth="lg" sx={{ py: 0, pt: 0 }}>
          <AboutUs />
        </Container>
          <AboutUs />
      </Section> */}
       <AboutUs />
      {/* Hero Section */}
      {/* <Box sx={{ '& > div': { mb: 0 } }}>
        <HeroSection />
      </Box> */}
       <HeroSection />


      {/* Vision & Mission Section */}
  <VisionMissionSection/>

      {/* Services Section */}
      {/* <Section id="services" sx={{ pt: 0 }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <ServicesSection />
        </Container>
      </Section> */}
          <ServicesSection />

      {/* Stats Section */}
      {/* <Section id="stats">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Our Impact in <span style={{ color: 'orange' }}>Numbers</span>
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', color: 'text.secondary', fontSize: '1.1rem' }}>
              Delivering excellence and driving success through innovative solutions
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 8,
            mt: 6,
            mb: 0
          }}>
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
      </Section> */}
      <StatsSection />  

      {/* Tech Stack Section */}
      <Section id="tech-stack" sx={{ pt: 0 }}>
        <Container maxWidth="lg" sx={{ pt: 2, pb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2, color: 'black' }}>
              Our Tech Stack
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', color: 'text.secondary' }}>
              Technologies we work with to build amazing digital experiences
            </Typography>
          </Box>

          {/* Tech Stack Scroller */}
          <Box sx={{ overflow: 'hidden', position: 'relative' }}>
            <Box sx={{ 
              display: 'flex',
              animation: 'scroll 30s linear infinite',
              width: 'fit-content',
              '@keyframes scroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' }
              },
              '&:hover': {
                animationPlayState: 'paused'
              }
            }}>
              {[
                // Frontend
                { name: 'React', icon: <FaReact style={{ color: '#61DAFB' }} /> },
                { name: 'Angular', icon: <FaAngular style={{ color: '#DD0031' }} /> },
                { name: 'Vue', icon: <FaVuejs style={{ color: '#4FC08D' }} /> },
                { name: 'HTML5', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
                { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
                { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} /> },
                { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
                
                // Backend
                { name: 'Node.js', icon: <FaNodeJs style={{ color: '#339933' }} /> },
                { name: 'Python', icon: <FaPython style={{ color: '#3776AB' }} /> },
                { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
                { name: '.NET', icon: <SiDotnet style={{ color: '#512BD4' }} /> },
                { name: 'PHP', icon: <FaPhp style={{ color: '#777BB4' }} /> },
                
                // Databases
                { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
                { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
                { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
                { name: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
                
                // Repeat for continuous scroll
                { name: 'React', icon: <FaReact style={{ color: '#61DAFB' }} /> },
                { name: 'Angular', icon: <FaAngular style={{ color: '#DD0031' }} /> },
                { name: 'Vue', icon: <FaVuejs style={{ color: '#4FC08D' }} /> },
                { name: 'HTML5', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
                { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
                { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} /> },
                { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
                { name: 'Node.js', icon: <FaNodeJs style={{ color: '#339933' }} /> },
                { name: 'Python', icon: <FaPython style={{ color: '#3776AB' }} /> },
                { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
                { name: '.NET', icon: <SiDotnet style={{ color: '#512BD4' }} /> },
                { name: 'PHP', icon: <FaPhp style={{ color: '#777BB4' }} /> },
                { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
                { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
                { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
                { name: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
              ].map((tech, index) => (
                <Box key={index} sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mx: 4,
                  minWidth: 100,
                  py: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Box sx={{
                    fontSize: '2.5rem',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& svg': {
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover svg': {
                      transform: 'scale(1.2)'
                    }
                  }}>
                    {tech.icon}
                  </Box>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    textAlign: 'center',
                    mt: 1
                  }}>
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Section>

      {/* Other sections can go here */}
    </Box>
  );
};

export default Home;
