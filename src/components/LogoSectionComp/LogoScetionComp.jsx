import styled, { css } from "styled-components";

// Styled components
const LogoContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

const LogoImage = styled.img`
  cursor: pointer;
  transition: transform 0.8s ease-in-out;
`;

const LogoTitle = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 1.25rem;
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
  ${(props) =>
    !props.open &&
    css`
      transform: scale(0);
    `}
`;

const LogoSection = ({ open }) => {
  return (
    <LogoContainer>
      <LogoImage
        src="./src/assets/g839.png"
        open={open}
        alt="Logo"
        width={40}
      />
      <LogoTitle open={open}>GeneriXOs</LogoTitle>
    </LogoContainer>
  );
};

export default LogoSection;
