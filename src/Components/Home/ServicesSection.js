import React, { useState } from 'react';
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
    <div className={`services-section-wrapper ${theme}`}>
      {/* New container div for heading and toggle button */}
      <div className="header-container">
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
      </div>


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
            <div
              className="service-block"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <svg className="services-svg" viewBox="0 0 700 200">
                <circle
                  cx={startX}
                  cy={startY}
                  r="60"
                  fill={color}
                  className="hub-circle"
                />

                <foreignObject x={startX - 20} y={startY - 25} width="40" height="40">
                  <div className="hub-icon" style={{ color: 'white' }} role="img" aria-label={node.label}>
                    {node.icon}
                  </div>
                </foreignObject>

                <text
                  x={startX}
                  y={startY + 45}
                  textAnchor="middle"
                  className="hub-text"
                >
                  {node.label}
                </text>

                {isHovered &&
                  serviceData[node.label].map((item, i) => {
                    const endY = textStartY + i * gapY;
                    return (
                      <path
                        key={`wave-${i}`}
                        d={`M${startX + 60},${startY}
                            C ${startX + 100},${startY}
                              ${textStartX - 50},${endY}
                              ${textStartX},${endY}`}
                        className="curve-path"
                        stroke={color}
                      />
                    );
                  })}

                {serviceData[node.label].map((item, i) => (
                  <text
                    key={`text-${i}`}
                    x={textStartX + 10}
                    y={textStartY + i * gapY}
                    className="service-text"
                    fill={color}
                  >
                    • {item}
                  </text>
                ))}
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;