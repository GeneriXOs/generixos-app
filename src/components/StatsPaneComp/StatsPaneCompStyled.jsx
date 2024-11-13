import styled from "styled-components";
import { Pane, Text } from "evergreen-ui";

export const StatsPane = styled(Pane)`
  flex: 1 1 17rem; /* Ajusta el pane a un mínimo de 17rem */
  max-width: 20%;
  height: 10rem;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  position: relative;
  border-radius: 0.5rem;

  @media (max-width: 575.98px) and (min-width: 300px) {
    max-width: 60%;
  }

  & .DecoIcon {
    position: absolute;
    width: 40%;
    height: 40%;
    top: -5%;
    left: -10%;
    background-color: ${({ bgColor }) =>
      bgColor || "var(--background-color-primary)"};
    z-index: 2;
    border-radius: 0.5rem;
    color: var(--deep-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }

  & .IconFont {
    transition: all 0.2s ease-in-out;
  }

  & .Progress {
    position: absolute;
    top: 60%;
    display: flex;
    width: 70%;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  & .ProgressContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  & .up .ProgressText {
    color: var(--danger-alert);
  }

  & .down .ProgressText {
    color: var(--success-alert);
  }

  & .up .ProgressIcon {
    color: var(--danger-alert);
  }

  & .down .ProgressIcon {
    color: var(--success-alert);
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &:hover .IconFont {
    animation-name: pulse;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
`;

export const TextTitle = styled(Text)`
  font-size: 1rem;
  font-weight: 700;
  position: absolute;
  top: 10%;
  left: 35%;
`;

export const TextAmount = styled(Text)`
  color: var(--text-color-primary);
  font-size: 2rem;
  font-weight: 700;
`;

export const TextSubCents = styled(Text)`
  font-size: 1rem;
  font-weight: 700;
  position: absolute;
  color: var(--text-color-primary);
`;
