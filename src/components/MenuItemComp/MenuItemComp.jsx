import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FontAwesomeIconColor = styled(FontAwesomeIcon)``;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
`;

const Item = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 0.375rem;
  padding: 5px;
  cursor: pointer;
  color: var(--deep-white);
  gap: 0.5rem;

  ${({ gap }) => (gap ? `margin-top: 2rem;` : `margin-top: 0.8rem;`)}

  &:hover {
    background-color: var(--glassmorphism-color);
    color: var(--contrast-color);
  }

  ${({ active }) =>
    active &&
    `
    background-color: var(--glassmorphism-color);
    color: var(--contrast-color); 
  `}

  ${({ open }) =>
    !open &&
    `
      width: 2rem;
      height: 2rem;
  `}
`;

const Span = styled.span`
  transition: font-size 0.1s ease-in-out;
  display: flex;
  opacity: 1;
  margin-left: 3rem;
  ${({ open }) =>
    !open &&
    `
    font-size: 0;

  `}
`;

const MenuItem = ({ menu, open, active, onClick, to = "" }) => {
  return (
    <Item gap={menu.gap} onClick={onClick} active={active} to={to}>
      <IconContainer>
        <FontAwesomeIconColor icon={menu.icon} fontSize={20} />
      </IconContainer>
      <Span open={open}>{menu.title}</Span>
    </Item>
  );
};

export default MenuItem;
