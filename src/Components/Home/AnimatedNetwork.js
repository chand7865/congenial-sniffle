import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CampaignIcon from '@mui/icons-material/Campaign';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import buildImg from '../../assests/build.jpg'
import digital from '../../assests/digital.jpg'
import success from '../../assests/sucess.png'
import soft from '../../assests/soft.jpg'
import mobile from '../../assests/mobile.jpg'
import cloud from '../../assests/cloud.png'
import design from '../../assests/design.jpg'
const cardData = [
  {
    label: 'Web Development',
    icon: <LanguageIcon fontSize="inherit" />,
    bgImage: buildImg,
    info: ['HTML, CSS, JavaScript', 'Responsive Design', 'React, Angular, Vue', 'Performance Optimization', 'Cross-browser Support'],
  },
  {
    label: 'Mobile App Development',
    icon: <PhoneIphoneIcon fontSize="inherit" />,
    bgImage: mobile,
    info: ['iOS & Android', 'React Native / Flutter', 'Push Notifications', 'App Store Deployment', 'UX Optimized Interfaces'],
  },
  {
    label: 'Software Development',
    icon: <ComputerIcon fontSize="inherit" />,
    bgImage: soft,
    info: ['Custom Applications', 'Desktop & Web Software', 'Agile Development', 'Testing & QA', 'Maintenance & Support'],
  },
  {
    label: 'Cloud Solutions',
    icon: <CloudQueueIcon fontSize="inherit" />,
    bgImage: cloud,
    info: ['AWS / Azure / GCP', 'Serverless Architecture', 'DevOps Integration', 'Scalable Storage', 'Disaster Recovery'],
  },
  {
    label: 'Digital Marketing',
    icon: <CampaignIcon fontSize="inherit" />,
    bgImage: digital,
    info: ['SEO & SEM', 'Social Media Campaigns', 'Email Marketing', 'Analytics & Reports', 'Content Strategy'],
  },
  {
    label: 'IT Consulting',
    icon: <BuildCircleIcon fontSize="inherit" />,
    bgImage: design,
    info: ['Strategy & Roadmaps', 'Technology Audits', 'Security Assessments', 'Cloud Migration Plans', 'Cost Optimization'],
  },
  {
    label: 'Support',
    icon: <SupportAgentIcon sx={{ fontSize: '1.75rem' }} />,
    bgImage: success,
    info: ['24/7 Helpdesk', 'Remote Support', 'Issue Tracking', 'System Monitoring', 'User Training'],
  },
];

const CARD_RADIUS = 220;

const getCardPositions = (count) => {
  const angleStep = (2 * Math.PI) / count;
  return Array.from({ length: count }).map((_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    return {
      x: CARD_RADIUS * Math.cos(angle),
      y: CARD_RADIUS * Math.sin(angle),
    };
  });
};

const Line = ({ x1, y1, x2, y2 }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="rgba(0, 0, 0, 0.2)"
    strokeWidth="2"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 0.6 }}
  />
);

const AnimatedNetwork = () => {
  const [hovered, setHovered] = useState(null);
  const [showLines, setShowLines] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  const positions = getCardPositions(cardData.length);

  useEffect(() => {
    if (inView) {
      setHovered(null);
      setShowLines(false);
      setTimeout(() => setShowLines(true), 50);

      controls.start({
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
      });
    }
  }, [inView, controls]);

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        pt: 2,
        pb: 4,
        bgcolor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <Box sx={{ textAlign: 'center', mb: 3, maxWidth: '800px', mx: 'auto', px: 2, position: 'relative', zIndex: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', sm: '2.2rem' }, mb: 1 }}>
          Our Services Network
        </Typography>
      </Box>

      {/* Cards Container with extra top padding */}
      <Box sx={{ 
        width: '100%', 
        pt: 6, 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',  
      }}>
        {/* Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            backgroundImage: 'url(/images/sucess.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        />

        {/* Hover background */}
        {hovered !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              backgroundImage: `url(${cardData[hovered].bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25,
              pointerEvents: 'none',
              transition: 'background-image 0.3s ease-in-out',
            }}
          />
        )}

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px', md: '700px' },
            height: { xs: '350px', sm: '450px', md: '500px' },
            zIndex: 2,
          }}
        >
          {/* SVG Lines */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {showLines &&
              positions.map((start, i) =>
                positions.map((end, j) =>
                  i < j ? (
                    <Line
                      key={`line-${i}-${j}`}
                      x1={`calc(50% + ${start.x}px)`}
                      y1={`calc(50% + ${start.y}px)`}
                      x2={`calc(50% + ${end.x}px)`}
                      y2={`calc(50% + ${end.y}px)`}
                    />
                  ) : null
                )
              )}
          </svg>

          {/* Service Icons + Text on Top */}
          {cardData.map((card, i) => {
            const position = positions[i];
            const isHovered = hovered === i;
            const isSupport = card.label === 'Support';
            const isWebDev = card.label === 'Web Development';
            const isITConsulting = card.label === 'IT Consulting';
            const isDigitalMarketing = card.label === 'Digital Marketing';
            const isCloudSolutions = card.label === 'Cloud Solutions';
            const isSoftwareDev = card.label === 'Software Development';
            const isMobileDev = card.label === 'Mobile App Development';

            // Position adjustments
            let adjustedY, adjustedX;
            const centerX = '50%';
            const centerY = '50%';

            if (isWebDev) {
              adjustedY = '38%';  
              adjustedX = '40%';
            } else if (isSupport) {
              adjustedY = '15%';
              adjustedX = 'calc(15% + 25px)';
            } else if (isITConsulting) {
              adjustedY = '42%';
              adjustedX = '45%';
            } else if (isDigitalMarketing) {
              adjustedY = '41%';
              adjustedX = '45%';
            } else if (isCloudSolutions) {
              adjustedY = '40%';
              adjustedX = '45%';
            } else if (isSoftwareDev) {
              adjustedY = '35%';
              adjustedX = '45%';
            } else if (isMobileDev) {
              adjustedY = '35%';
              adjustedX = '43%';
            } else {
              adjustedY = centerY;
              adjustedX = centerX;
            }

            return (
              <motion.div
                key={i}
                animate={
                  inView
                    ? {
                        x: isSupport ? 0 : position.x,
                        y: isSupport ? 0 : position.y,
                        scale: 1,
                        opacity: 1,
                        transition: { 
                          delay: i * 0.1, 
                          type: 'spring', 
                          stiffness: isSupport ? 50 : 100, 
                          damping: 15 
                        },
                      }
                    : {}
                }
                style={{
                  position: 'absolute',
                  left: isSupport ? 'calc(15% + 20px)' : (isWebDev ? '45%' : adjustedX),
                  top: isSupport ? '15%' : (isWebDev ? '35%' : adjustedY),
                  transform: isSupport ? 'none' : 'translate(-50%, -50%)',
                  zIndex: isSupport ? 10 : 1,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Label above icon */}
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 0.5,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      color: '#333',
                      textAlign: 'center',
                      maxWidth: 100,
                    }}
                  >
                    {card.label}
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: isSupport ? 75 : 70,
                      height: isSupport ? 75 : 70,
                      borderRadius: '50%',
                      background: isHovered ? '#fff' : (isSupport ? 'orange' : 'rgba(247, 150, 21, 0.9)'),
                      color: isHovered ? '#F79615' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isHovered ? '0 0 20px rgba(247, 150, 21, 0.5)' : '0 4px 12px rgba(0,0,0,0.1)',
                      border: isHovered ? '2px solid #F79615' : 'none',
                      transition: 'all 0.3s ease',
                      '& .MuiSvgIcon-root': {
                        width: isSupport ? '1.75rem' : '1.5rem',
                        height: isSupport ? '1.75rem' : '1.5rem',
                      },
                    }}
                  >
                    {card.icon}
                  </Box>
                </Box>
              </motion.div>
            );
          })}

          {/* Hover Info Center */}
          {hovered !== null && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: 2,
                width: 260,
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                zIndex: 10,
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="primary"
                gutterBottom
                sx={{ fontSize: '1rem', textAlign: 'center' }}
              >
                {cardData[hovered].label}
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {cardData[hovered].info.map((line, idx) => (
                  <Typography
                    key={idx}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.85rem', mb: 0.5 }}
                  >
                    {line}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedNetwork;
