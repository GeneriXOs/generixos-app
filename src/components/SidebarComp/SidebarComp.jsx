import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoSection from "../LogoSectionComp/LogoScetionComp";
import MenuItem from "../MenuItemComp/MenuItemComp";
import {
  faAddressBook,
  faBookMedical,
  faCartFlatbed,
  faChartLine,
  faFileInvoice,
  faGears,
  faGlobe,
  faPowerOff,
  faScaleUnbalanced,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons/faHandHoldingDollar";
import { t } from "i18next";

const SidebarContainer = styled.div`
  background-color: var(--base-color);
  height: 100vh;
  padding: 1.2rem;
  padding-top: 1.5rem;
  transition: width 0.3s ease-in-out;
  width: ${(props) => (props.open ? "20rem" : "5rem")};
  position: relative;
  left: 0;

  /* Escritorio grande */
  @media (min-width: 1400px) {
  }

  /* Escritorio mediano */
  @media (min-width: 1200px) and (max-width: 1399.98px) {
  }

  /* Tablet grande landscape */
  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  /* Tablet grande portrait */
  @media (min-width: 768px) and (max-width: 991.98px) and (orientation: portrait) {
  }

  /* Tablet pequeño landscape */
  @media (min-width: 576px) and (max-width: 767.98px) and (orientation: landscape) {
  }

  /* Móvil grande */
  @media (max-width: 575.98px) and (min-width: 360px) {
    position: absolute;
    left: ${(props) => (props.open ? "0" : "-100%")};
    z-index: 1000;
    width: 100%;
  }

  /* Móvil pequeño */
  @media (max-width: 359.98px) {
  }
`;

const MenuList = styled.ul`
  padding-top: 1.5rem;
`;

const MenuItemWrapper = styled.li`
  list-style: none;
  margin-bottom: ${(props) => (props.gap ? "1.5rem" : "0")};
`;

const SidebarComp = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const Menus = [
    {
      title: t("generixos-app-sidebar-menu-dashboard"),
      icon: faChartLine,
      to: "/home",
    },
    {
      title: t("generixos-app-sidebar-menu-sales"),
      icon: faHandHoldingDollar,
      gap: true,
    },
    {
      title: t("generixos-app-sidebar-menu-expenses"),
      icon: faScaleUnbalanced,
    },
    { title: t("generixos-app-sidebar-menu-inventory"), icon: faCartFlatbed },
    { title: t("generixos-app-sidebar-menu-analytics"), icon: faFileInvoice },
    { title: t("generixos-app-sidebar-menu-hr"), icon: faUsers },
    { title: t("generixos-app-sidebar-menu-contacts"), icon: faAddressBook },
    { title: t("generixos-app-sidebar-menu-legal"), icon: faBookMedical },
    { title: t("generixos-app-sidebar-menu-settings"), icon: faGears },
  ];

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
    if (open) {
      setOpen(false);
    }
  };

  const handleSidebarClick = () => {
    setOpen(!open);
  };

  return (
    <SidebarContainer onClick={handleSidebarClick} open={open}>
      <LogoSection open={open} />
      <MenuList>
        {Menus.map((menu, index) => (
          <MenuItemWrapper
            key={menu.title}
            gap={menu.gap}
            onClick={(e) => {
              e.stopPropagation();
              handleMenuItemClick(index);
            }}
          >
            <MenuItem
              menu={menu}
              open={open}
              active={activeIndex === index}
              to={menu.to}
            />
          </MenuItemWrapper>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};

export default SidebarComp;
