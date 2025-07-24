import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { animate, motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
 
const Counter = ({ from = 0, to = 100, duration = 2, start = false }) => {

  const [current, setCurrent] = useState(from);
 
  useEffect(() => {

    if (start) {

      const controls = animate(from, to, {

        duration,

        onUpdate: (v) => setCurrent(Math.floor(v)),

      });

      return () => controls.stop();

    }

  }, [from, to, duration, start]);
 
  return (
<>
<span style={{ color: '#FF6B35' }}>{current}</span>
<span style={{ color: '#FF6B35' }}>+</span>
</>

  );

};
 
const CircularStat = ({ label, value, circleText, Icon = EmojiEventsIcon, delay = 0 }) => {

  const [ref, inView] = useInView({

    triggerOnce: false, // animate every time it comes into view

    threshold: 0.2,

  });
 
  return (
<motion.div

      initial={{ scale: 0, opacity: 0 }}

      animate={inView ? { scale: 1, opacity: 1 } : {}}

      transition={{ delay, duration: 0.8, type: 'spring', stiffness: 120 }}
>
<Box

        sx={{

          width: 200,

          height: 200,

          position: 'relative',

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

        }}
>

        {/* Rotating Circular Text */}
<Box

          sx={{

            position: 'absolute',

            width: '100%',

            height: '100%',

            animation: 'rotateText 12s linear infinite',

            '@keyframes rotateText': {

              '0%': { transform: 'rotate(0deg)' },

              '100%': { transform: 'rotate(360deg)' },

            },

          }}
>
<svg viewBox="0 0 200 200">
<defs>
<path

                id={`circlePath-${label}`}

                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"

              />
</defs>
<text fill="#000" fontSize="12" letterSpacing="2px" fontWeight="bold">
<textPath href={`#circlePath-${label}`} startOffset="0%">

                {circleText.repeat(4)}
</textPath>
</text>
</svg>
</Box>
 
        {/* Counter, Label, and Icon */}
<Box

          sx={{

            textAlign: 'center',

            zIndex: 2,

            display: 'flex',

            flexDirection: 'column',

            alignItems: 'center',

          }}

          ref={ref}
>
<Typography variant="h4" fontWeight="bold" sx={{ color: '#000' }}>
<Counter to={value} start={inView} />
</Typography>
<Typography variant="body1" sx={{ mt: 0.5, mb: 1, fontWeight: 'bold', color: '#FF6B35' }}>

            {label}
</Typography>
 
          {/* Icon at the bottom */}
<motion.div

            initial={{ y: 10, opacity: 0 }}

            animate={inView ? { y: 0, opacity: 1 } : {}}

            transition={{ delay: delay + 0.6 }}
>
<Icon sx={{ fontSize: 32, color: '#FF6B35' }} />
</motion.div>
</Box>
</Box>
</motion.div>

  );

};
 
export default CircularStat;

 