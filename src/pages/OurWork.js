import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animate';

function OurWork() {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>

        <img src={athlete} alt="athlete" />
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>

        <img src={theracer} alt="the racer" />
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>

        <img src={goodtimes} alt="good times" />
      </Movie>
    </Work>
  );
}

// Styled

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #cccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
