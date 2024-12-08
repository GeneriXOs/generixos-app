import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  CircleArrowRightIcon,
  EditIcon,
  Menu,
  PeopleIcon,
  Popover,
  Switch,
  TextInput,
  TrashIcon,
  Position,
  Button,
  Text,
  Pulsar,
  Tooltip,
} from "evergreen-ui";
import { t } from "i18next";


const BurgerButton = styled.button`
  border: none;
  color: var(--deep-white);
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: var(--glassmorphism-color);
    color: var(--contrast-color);
  }
`;

const Container = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  /* Escritorio grande */
  @media (min-width: 1400px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "" : "5rem")};
  }

  /* Escritorio mediano */
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "" : "5rem")};
  }

  /* Tablet grande landscape */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "" : "5rem")};

    & .Search-section .TextInput {
      width: 200px;
    }
  }

  /* Tablet grande portrait */
  @media (min-width: 768px) and (max-width: 991.98px) and (orientation: portrait) {
  }

  /* Tablet pequeño landscape */
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
  }

  /* Móvil grande */
  @media (max-width: 575.98px) and (min-width: 360px) {
    margin-left: 0;
    left: 0;

    & .Search-section {
      display: none;
    }

    & .Burger-btn {
      display: flex;
    }
  }

  /* Móvil pequeño */
  @media (max-width: 359.98px) {
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  height: 5rem;
  background-color: var(--base-color);
  justify-content: space-between;
  position: relative;
`;

const SearchWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  display: flex;
  align-items: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

const IconsNavButton = styled.button`
  background: none;
  border: none;
  color: var(--deep-white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  margin-left: 1rem;
  position: relative;
  &:hover {
    background-color: var(--glassmorphism-color);
    color: var(--contrast-color);
  }
`;

const NotiPulsar = styled(Pulsar)`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--danger-alert-soft);
  opacity: 1;

  & div {
    background: var(--danger-alert);
    opacity: 1;
  }
`;

const NavbarComp = ({
  sidebarOpen,
  handlerBurgerClick,
  handlerLanguageChange,
}) => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setChecked(e.target.checked);
    const body = document.getElementsByTagName("body")[0];
    if (checked) {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Container sidebarOpen={sidebarOpen}>
      <TopBar>
        <BurgerButton
          className="Burger-btn"
          onClick={() => handlerBurgerClick()}
        >
          <FontAwesomeIcon icon={faBars} fontSize={20} />
        </BurgerButton>
        <SearchWrapper className="Search-section">
          <TextInput
            className="TextInput"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            width="450px"
          />
        </SearchWrapper>

        <IconsWrapper>
          <Tooltip content={t("generixos-app-navbar-tooltip-change-language")}>
            <IconsNavButton onClick={() => handlerLanguageChange()}>
              <FontAwesomeIcon icon={faGlobe} fontSize={20} />
            </IconsNavButton>
          </Tooltip>
          <Popover
            position={Position.BOTTOM_RIGHT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item>Share...</Menu.Item>
                  <Menu.Item>Move...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                  <Menu.Item>Rename...</Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Tooltip content={t("generixos-app-navbar-tooltip-notifications")}>
              <IconsNavButton>
                <FontAwesomeIcon icon={faBell} fontSize={20} />
                <NotiPulsar size={8} />
              </IconsNavButton>
            </Tooltip>
          </Popover>

          <Tooltip content={t("generixos-app-navbar-tooltip-change-theme")}>
            <Switch
              checked={checked}
              onChange={(e) => handleSwitchChange(e)}
              height={20}
              marginLeft="1.5rem"
            />
          </Tooltip>

          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item icon={PeopleIcon}>Share...</Menu.Item>
                  <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
                  <Menu.Item icon={EditIcon} secondaryText="⌘R">
                    Rename...
                  </Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item icon={TrashIcon} intent="danger">
                    Delete...
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Tooltip content={t("generixos-app-navbar-tooltip-profile")}>
              <Avatar name="Libardo Lozano" size={40} marginRight={16} />
            </Tooltip>
          </Popover>
        </IconsWrapper>
      </TopBar>
    </Container>
  );
};

export default NavbarComp;
