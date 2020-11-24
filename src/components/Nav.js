import styled from 'styled-components';

function Nav() {
  return (
    <StyledNav>
      <h1 id="logo">Capture</h1>
      <ul>
        <li>
          <button>1. About Us</button>
        </li>
        <li>
          <button>2. Our Work</button>
        </li>
        <li>
          <button>1. Contact Us</button>
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
