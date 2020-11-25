import React from 'react';
import home1 from '../img/home1.png';
import { Container, Description, Image, Hide } from '../styles';
import styled from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
import { imageAnimation, titleAnimation, fade, imageHover } from '../animate';

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={imageAnimation}
          whileHover={imageHover}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
    </About>
  );
}

// Stlyled Components

const About = styled(Container)``;

export default AboutSection;
