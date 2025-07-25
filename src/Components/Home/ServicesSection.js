import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';
import { Typography } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaPaintBrush, FaCogs, FaBullhorn, FaMicrochip } from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const leftNodes = [
    { label: 'Design', icon: <FaPaintBrush /> },
    { label: 'Services', icon: <FaCogs /> },
    { label: 'Marketing', icon: <FaBullhorn /> },
    { label: 'Tech', icon: <FaMicrochip /> }
  ];

  const serviceData = {
    Design: ['Digital Branding', 'UX & UI Design', 'Advertisement', 'Brochure', 'AI Design', 'Motion Graphics'],
    Services: ['Web apps', 'Mobile apps', 'Custom apps', 'SaaS', 'CMS', 'Cloud'],
    Marketing: ['Digital Marketing', 'Blog Writing', 'SEO', 'PPC', 'Email', 'Social Media'],
    Tech: ['Cloud Infra', 'DevOps', 'API Dev', 'Monitoring', 'Security', 'CI/CD']
  };

  const getColor = (label) => {
    switch (label) {
      case 'Design': return '#a259ff';
      case 'Services': return '#3cd856';
      case 'Marketing': return '#ffc107';
      case 'Tech': return '#c147e9';
      default: return '#999';
    }
  };

  return (
    <motion.div
      className={`services-section-wrapper ${theme}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* New container div for heading and toggle button */}
      <motion.div
        className="header-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h2" className="services-heading">
          Our Core Services
        </Typography>
        <button
          className="theme-toggle-btn icon-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {theme === 'dark' ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
        </button>
      </motion.div>

      <div className="services-grid-wrapper">
        {leftNodes.map((node, index) => {
          const color = getColor(node.label);
          const isHovered = hoveredIndex === index;
          const startX = 150 + index * 10;
          const startY = 100;
          const textStartX = 420;
          const textStartY = 40;
          const gapY = 26;

          return (
            <motion.div
              className="service-block"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
            >
              <motion.svg
                className="services-svg"
                viewBox="0 0 700 200"
                initial={false}
                animate={isHovered ? { scale: 1.04 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.circle
                  cx={startX}
                  cy={startY}
                  r="60"
                  fill={color}
                  className="hub-circle"
                  initial={false}
                  animate={isHovered ? { r: 68 } : { r: 60 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />

                <foreignObject x={startX - 20} y={startY - 25} width="40" height="40">
                  <motion.div
                    className="hub-icon"
                    style={{ color: 'white' }}
                    role="img"
                    aria-label={node.label}
                    initial={false}
                    animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  >
                    {node.icon}
                  </motion.div>
                </foreignObject>

                <motion.text
                  x={startX}
                  y={startY + 45}
                  textAnchor="middle"
                  className="hub-text"
                  initial={false}
                  animate={isHovered ? { fill: '#fff', fontSize: 28 } : { fill: '#fff', fontSize: 22 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  {node.label}
                </motion.text>

                {isHovered &&
                  serviceData[node.label].map((item, i) => {
                    const endY = textStartY + i * gapY;
                    return (
                      <motion.path
                        key={`wave-${i}`}
                        d={`M${startX + 60},${startY}
                            C ${startX + 100},${startY}
                              ${textStartX - 50},${endY}
                              ${textStartX},${endY}`}
                        className="curve-path"
                        stroke={color}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5 + i * 0.08 }}
                      />
                    );
                  })}

                {serviceData[node.label].map((item, i) => (
                  <motion.text
                    key={`text-${i}`}
                    x={textStartX + 10}
                    y={textStartY + i * gapY}
                    className="service-text"
                    fill={color}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  >
                    • {item}
                  </motion.text>
                ))}
              </motion.svg>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ServicesSection;