import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <StyledNav>
      <h1 id="logo">Capture</h1>
      <ul>
        <li>
          <Link to="/">
            <button>About Us</button>
          </Link>
        </li>
        <li>
          <Link to="/work">
            <button>Our Work</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  button {
    color: white;
    font-size: 1rem;
    border: none;
    padding: 1rem;
    margin: none;
    :hover {
      background: none;
    }
    ::focus {
      border: none;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: 'Lobster', cursive;
    color: white;
  }
`;

export default Nav;
