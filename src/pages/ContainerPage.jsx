import React, { useState } from "react";
import SidebarComp from "../components/SidebarComp/SidebarComp";
import NavbarComp from "../components/NavbarComp/NavbarComp";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

const ContainerPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { i18n } = useTranslation();

  const handlerBurgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlerLanguageChange = () => {
    let lang = localStorage.getItem("i18nextLng");
    if (lang === "es") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
    localStorage.setItem("i18nextLng", i18n.language);
    document.documentElement.lang = i18n.language;
  };

  return (
    <PageContainer>
      {/* Sidebar */}
      <SidebarComp
        open={sidebarOpen}
        toggleOpen={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "" : "ml-20"
        }`}
      >
        {/* Navbar */}
        <NavbarComp
          sidebarOpen={sidebarOpen}
          handlerBurgerClick={handlerBurgerClick}
          handlerLanguageChange={handlerLanguageChange}
        />

        {/* Main content goes here */}
        <PageContainerRender>
          <Outlet /> {/* Renderizamos el contenido de las rutas aquí */}
        </PageContainerRender>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  padding: 0%;
  margin: 0%;
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
`;

const PageContainerRender = styled.div`
  height: 100%;
  padding: 0%;
  margin: 0%;
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
`;

export default ContainerPage;
